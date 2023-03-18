"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MgbrBlackStack = void 0;
const cdk = require("aws-cdk-lib");
//APPSYNC
const appsync = require("aws-cdk-lib/aws-appsync");
//LAMBDA
const lambda = require("aws-cdk-lib/aws-lambda");
//DYNAMODB
const ddb = require("aws-cdk-lib/aws-dynamodb");
class MgbrBlackStack extends cdk.Stack {
    constructor(scope, id, props) {
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
exports.MgbrBlackStack = MgbrBlackStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdicl9ibGFjay1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1nYnJfYmxhY2stc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBRW5DLFNBQVM7QUFDVCxtREFBbUQ7QUFDbkQsUUFBUTtBQUNSLGlEQUFpRDtBQUNqRCxVQUFVO0FBQ1YsZ0RBQWdEO0FBR2hELE1BQWEsY0FBZSxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzNDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFNeEIsNEVBQTRFO1FBQzVFLDRFQUE0RTtRQUM1RSxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUNwRCxJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztZQUMxRCxtQkFBbUIsRUFBRTtnQkFDbkIsb0JBQW9CLEVBQUU7b0JBQ3BCLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPO2lCQUNyRDthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsc0RBQXNEO1FBQ3RELElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3ZDLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVTtTQUN0QixDQUFDLENBQUM7UUFDSCw4Q0FBOEM7UUFDOUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDdkMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRTtTQUN4QixDQUFDLENBQUM7UUFDSCw0RUFBNEU7UUFNNUUseUVBQXlFO1FBQ3pFLHlCQUF5QjtRQUN6QixNQUFNLGVBQWUsR0FBRyxJQUFJ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bSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG4vL0FQUFNZTkNcbmltcG9ydCAqIGFzIGFwcHN5bmMgZnJvbSAnYXdzLWNkay1saWIvYXdzLWFwcHN5bmMnO1xuLy9MQU1CREFcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbi8vRFlOQU1PREJcbmltcG9ydCAqIGFzIGRkYiBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZHluYW1vZGInO1xuXG5cbmV4cG9ydCBjbGFzcyBNZ2JyQmxhY2tTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuXG5cblxuXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipBUFBTWU5DKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8vQVBQU1lOQydzIEFQSSBnaXZlcyB5b3UgYSBncmFwaHFsQXBpIHdpdGggYXBpS2V5ICggZm9yIGRlcGxveWluZyBBUFBTWU5DIClcbiAgICBjb25zdCBhcGkgPSBuZXcgYXBwc3luYy5HcmFwaHFsQXBpKHRoaXMsICdncmFwaGxBcGknLCB7XG4gICAgICBuYW1lOiAnbWdwcl9ibGFjay1hcGknLFxuICAgICAgc2NoZW1hOiBhcHBzeW5jLlNjaGVtYUZpbGUuZnJvbUFzc2V0KCdncmFwaHFsL3NjaGVtYS5ncWwnKSxcbiAgICAgIGF1dGhvcml6YXRpb25Db25maWc6IHtcbiAgICAgICAgZGVmYXVsdEF1dGhvcml6YXRpb246IHtcbiAgICAgICAgICBhdXRob3JpemF0aW9uVHlwZTogYXBwc3luYy5BdXRob3JpemF0aW9uVHlwZS5BUElfS0VZXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL3ByaW50IGdyYXBocWxBcGkgVXJsIG9uIGNvbnNvbGUgYWZ0ZXIgZGVwbG95IEFQUFNZTkNcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnR3JhcGhRbEFQSVVSTCcsIHtcbiAgICAgIHZhbHVlOiBhcGkuZ3JhcGhxbFVybFxuICAgIH0pO1xuICAgIC8vcHJpbnQgYXBpS2V5IG9uIGNvbnNvbGUgYWZ0ZXIgZGVwbG95IEFQUFNZTkNcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnR3JhcGhRTEFQSUtleScsIHtcbiAgICAgIHZhbHVlOiBhcGkuYXBpS2V5IHx8ICcnXG4gICAgfSk7XG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipBUFBTWU5DKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblxuXG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipMQU1CREEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLy9jcmVhdGluZyBsYW1iZGFmdW5jdGlvblxuICAgIGNvbnN0IGxhbWJkYV9mdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ21ncHJfYmxhY2stbGFtYmRhJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE4X1gsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLFxuICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMjApLFxuICAgICAgY3VycmVudFZlcnNpb25PcHRpb25zOiB7XG4gICAgICAgIC8vYXN5bmMgcmV0cnkgYXR0ZW1wdHNcbiAgICAgICAgcmV0cnlBdHRlbXB0czogMFxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkxBTUJEQSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5cblxuXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKkRBVEFTT1VSQ0UqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8vc2V0dGluZyBsYW1iZGFmdW5jdGlvbiAoIGFzIGEgZGF0YXNvdXJjZSBvZiBlbmRwb2ludCApXG4gICAgY29uc3QgbGFtYmRhX2RhdGFzb3VyY2UgPSBhcGkuYWRkTGFtYmRhRGF0YVNvdXJjZSgnTGFtZGFEYXRhU291cmNlJywgbGFtYmRhX2Z1bmN0aW9uKTtcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqREFUQVNPVVJDRSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuXG5cblxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqUVVFUlkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgY29uc3Qgb3BlcmF0aW9ucyA9IFtcbiAgICAgIHsgdHlwZU5hbWU6IFwiTXV0YXRpb25cIiwgZmllbGROYW1lOiBcImluY3JlYXNlVmlzaXRDb3VudFwiIH0sXG4gICAgICB7IHR5cGVOYW1lOiBcIlF1ZXJ5XCIsIGZpZWxkTmFtZTogXCJnZXRWaXNpdENvdW50XCIgfSxcbiAgICAgIC8vXG4gICAgICAvL1xuICAgICAgeyB0eXBlTmFtZTogXCJNdXRhdGlvblwiLCBmaWVsZE5hbWU6IFwiYWRkUXVlc3Rpb25cIiB9LFxuICAgICAgeyB0eXBlTmFtZTogXCJNdXRhdGlvblwiLCBmaWVsZE5hbWU6IFwiZGVsZXRlUXVlc3Rpb25cIiB9LFxuICAgICAgeyB0eXBlTmFtZTogXCJNdXRhdGlvblwiLCBmaWVsZE5hbWU6IFwiYWRkQWxsUXVlc3Rpb25zXCIgfSxcbiAgICAgIHsgdHlwZU5hbWU6IFwiUXVlcnlcIiwgZmllbGROYW1lOiBcImdldEFsbFF1ZXN0aW9uc1wiIH0sXG4gICAgICB7IHR5cGVOYW1lOiBcIk11dGF0aW9uXCIsIGZpZWxkTmFtZTogXCJ1cGRhdGVRdWVzdGlvbkFuc3dlclBlcmNlbnRhZ2VcIiB9XG4gICAgXTtcbiAgICBvcGVyYXRpb25zLmZvckVhY2goKHsgdHlwZU5hbWUsIGZpZWxkTmFtZSB9KSA9PiB7XG4gICAgICBsYW1iZGFfZGF0YXNvdXJjZS5jcmVhdGVSZXNvbHZlcihgJHt0eXBlTmFtZX1fJHtmaWVsZE5hbWV9YCwge1xuICAgICAgICB0eXBlTmFtZSxcbiAgICAgICAgZmllbGROYW1lXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlFVRVJZKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblxuXG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipEWU5BTU9EQioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvL2NyZWF0aW5nIHRhYmxlXG4gICAgY29uc3QgbXlUYWJsZTEgPSBuZXcgZGRiLlRhYmxlKHRoaXMsICdtZ3ByX2JsYWNrLXRhYmxlLVZpc2l0Q291bnQnLCB7XG4gICAgICBwYXJ0aXRpb25LZXk6IHsgbmFtZTogJ2lkJywgdHlwZTogZGRiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sXG4gICAgICBiaWxsaW5nTW9kZTogZGRiLkJpbGxpbmdNb2RlLlBBWV9QRVJfUkVRVUVTVFxuICAgIH0pO1xuICAgIC8vY3JlYXRpbmcgdGFibGVcbiAgICBjb25zdCBteVRhYmxlMiA9IG5ldyBkZGIuVGFibGUodGhpcywgJ21ncHJfYmxhY2stdGFibGUtUXVlc3Rpb25BbnN3ZXInLCB7XG4gICAgICBwYXJ0aXRpb25LZXk6IHsgbmFtZTogJ3F1ZXN0aW9uJywgdHlwZTogZGRiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sXG4gICAgICBiaWxsaW5nTW9kZTogZGRiLkJpbGxpbmdNb2RlLlBBWV9QRVJfUkVRVUVTVFxuICAgIH0pO1xuICAgIC8vZm9yIGdpdmUgYWNjZXNzIHRvIGxhbWJkYWZ1bmN0aW9uICggdG8gZ2V0IGRhdGEgZnJvbSBkeW5hbW9EQidzIHRhYmxlIClcbiAgICBteVRhYmxlMS5ncmFudEZ1bGxBY2Nlc3MobGFtYmRhX2Z1bmN0aW9uKTtcbiAgICBteVRhYmxlMi5ncmFudEZ1bGxBY2Nlc3MobGFtYmRhX2Z1bmN0aW9uKTtcbiAgICAvL2ZvciB0ZWxsIGxhbWJkYWZ1bmN0aW9uICggdGhhdCB0aGlzIG5hbWVkIHRhYmxlIGNvbnNpZGVyIGZvciBzdG9yaW5nIClcbiAgICBsYW1iZGFfZnVuY3Rpb24uYWRkRW52aXJvbm1lbnQoJ1RBQkxFX05BTUVfMScsIG15VGFibGUxLnRhYmxlTmFtZSk7XG4gICAgbGFtYmRhX2Z1bmN0aW9uLmFkZEVudmlyb25tZW50KCdUQUJMRV9OQU1FXzInLCBteVRhYmxlMi50YWJsZU5hbWUpO1xuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkRZTkFNT0RCKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICB9XG59Il19