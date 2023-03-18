const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();


async function getAllQuestions() {
    const scanParams = {
        TableName: process.env.TABLE_NAME_2
    };


    try {
        const data = await docClient.scan(scanParams).promise();
        return data.Items;
    }
    catch (err: any) {
        return `ERROR: ${err.message}`;
    }
}

export default getAllQuestions;