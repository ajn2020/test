const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();


async function getVisitCount() {
    const params = {
        TableName: process.env.TABLE_NAME_1,
        Key: {
            'id': 'visit_count'
        }
    };


    try {
        const data = await docClient.get(params).promise();


        if (data && data.Item) {
            return data.Item;
        }


        return "No visit_count Exist";
    }
    catch (err: any) {
        return `ERROR: ${err.message}`;
    }
}

export default getVisitCount;