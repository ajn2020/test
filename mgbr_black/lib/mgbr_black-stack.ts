import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
//APPSYNC
import * as appsync from 'aws-cdk-lib/aws-appsync';
//LAMBDA
import * as lambda from 'aws-cdk-lib/aws-lambda';
//DYNAMODB
import * as ddb from 'aws-cdk-lib/aws-dynamodb';


export class MgbrBlackStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);





    //*********************************APPSYNC*********************************/
    //APPSYNC's API gives you a graphqlApi with apiKey ( for deploying APPSYNC )
    const api = new appsync.GraphqlApi(this, 'graphlApi', {
      name: 'mgpr_black-api',
      schema: appsync.SchemaFile.fromAsset('graphql/schema.gql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY
        }
      }
    });
    //print graphqlApi Url on console after deploy APPSYNC
    new cdk.CfnOutput(this, 'GraphQlAPIURL', {
      value: api.graphqlUrl
    });
    //print apiKey on console after deploy APPSYNC
    new cdk.CfnOutput(this, 'GraphQLAPIKey', {
      value: api.apiKey || ''
    });
    //*********************************APPSYNC*********************************/





    //*******************************LAMBDA*********************************/
    //creating lambdafunction
    const lambda_function = new lambda.Function(this, 'mgpr_black-lambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler',
      timeout: cdk.Duration.seconds(20),
      currentVersionOptions: {
        //async retry attempts
        retryAttempts: 0
      }
    });
    //*******************************LAMBDA*********************************/





    //*****************************DATASOURCE*******************************/
    //setting lambdafunction ( as a datasource of endpoint )
    const lambda_datasource = api.addLambdaDataSource('LamdaDataSource', lambda_function);
    //*****************************DATASOURCE*******************************/





    //******************************QUERY*********************************/
    const operations = [
      { typeName: "Mutation", fieldName: "increaseVisitCount" },
      { typeName: "Query", fieldName: "getVisitCount" },
      //
      //
      { typeName: "Mutation", fieldName: "addQuestion" },
      { typeName: "Mutation", fieldName: "deleteQuestion" },
      { typeName: "Mutation", fieldName: "addAllQuestions" },
      { typeName: "Query", fieldName: "getAllQuestions" },
      { typeName: "Mutation", fieldName: "updateQuestionAnswerPercentage" }
    ];
    operations.forEach(({ typeName, fieldName }) => {
      lambda_datasource.createResolver(`${typeName}_${fieldName}`, {
        typeName,
        fieldName
      });
    });
    //******************************QUERY*********************************/





    //*******************************DYNAMODB*********************************/
    //creating table
    const myTable1 = new ddb.Table(this, 'mgpr_black-table-VisitCount', {
      partitionKey: { name: 'id', type: ddb.AttributeType.STRING },
      billingMode: ddb.BillingMode.PAY_PER_REQUEST
    });
    //creating table
    const myTable2 = new ddb.Table(this, 'mgpr_black-table-QuestionAnswer', {
      partitionKey: { name: 'question', type: ddb.AttributeType.STRING },
      billingMode: ddb.BillingMode.PAY_PER_REQUEST
    });
    //for give access to lambdafunction ( to get data from dynamoDB's table )
    myTable1.grantFullAccess(lambda_function);
    myTable2.grantFullAccess(lambda_function);
    //for tell lambdafunction ( that this named table consider for storing )
    lambda_function.addEnvironment('TABLE_NAME_1', myTable1.tableName);
    lambda_function.addEnvironment('TABLE_NAME_2', myTable2.tableName);
    //*******************************DYNAMODB*********************************/
  }
}