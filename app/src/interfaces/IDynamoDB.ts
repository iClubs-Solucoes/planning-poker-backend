import * as AWS from 'aws-sdk'
import { IConfig } from './IConfig';

export interface IDynamoDBParams {
    TableName: string;
    Item?: Object;
    Key?: Object;
    KeyConditionExpression?: string;
    ProjectionExpression?: string;
    ExpressionAttributeNames?: Object;
    FilterExpression?: string;
    ExpressionAttributeValues?: Object;
    UpdateExpression?: string;
    ReturnValues?: string;
}

export interface IDynamoDBClient {
    fetch_all: (params: IDynamoDBParams) => Promise<AWS.DynamoDB.DocumentClient.ScanOutput>;
    fetch_one: (params: IDynamoDBParams) => Promise<AWS.DynamoDB.DocumentClient.GetItemOutput>;
    search: (params: IDynamoDBParams) => Promise<AWS.DynamoDB.DocumentClient.QueryOutput>;
    insert: (params: IDynamoDBParams) => Promise<AWS.DynamoDB.DocumentClient.PutItemOutput>;
    update: (params: IDynamoDBParams) => Promise<AWS.DynamoDB.DocumentClient.UpdateItemOutput>;
}

export interface IDynamoDB {
    (config: IConfig, sdk?: any): Promise<IDynamoDBClient>;
}