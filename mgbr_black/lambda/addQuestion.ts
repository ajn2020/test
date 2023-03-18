const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();


async function addQuestion(args) {
    const putParams = {
        TableName: process.env.TABLE_NAME_2,
        Item: args.content
    };


    try {
        await docClient.put(putParams).promise();
        return "Successful";
    }
    catch (err: any) {
        return `ERROR: ${err.message}`;
    }
}

export default addQuestion;