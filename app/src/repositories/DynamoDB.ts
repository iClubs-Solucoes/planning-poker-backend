import * as AWS from 'aws-sdk';
import { IConfig } from '../interfaces/IConfig';
import { IDynamoDB } from '../interfaces/IDynamoDB';
export const dynamo_client: IDynamoDB = async (config: IConfig, sdk: any = AWS) => {
    sdk.config.update({region: config.REGION});
    const dynamo = new sdk.DynamoDB.DocumentClient();

    return {
        fetch_all: async (params) => {
            return await dynamo.scan(params).promise();
        },
        fetch_one: async (params) => {
            return await dynamo.get(params).promise();
        },
        search: async (params) => {
            return await dynamo.query(params).promise();
        },
        insert: async (params) => {
            return await dynamo.put(params).promise();
        },
        update: async (params) => {
            return await dynamo.update(params).promise();
        },
    }
}