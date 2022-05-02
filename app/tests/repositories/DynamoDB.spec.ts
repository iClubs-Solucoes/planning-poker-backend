/// <reference types="mocha" />
import { expect } from 'chai';
import { dynamo_client } from '../../src/repositories/DynamoDB'
import { IDynamoDBParams } from '../../src/interfaces/IDynamoDB'
import { config_mock } from '../../src/mocks/config'

class mock_dynamo_client {
    public scan() { return this }
    public get() { return this }
    public query() { return this }
    public put() { return this }
    public update() { return this }
    public promise() { return }
}

const mock_aws = {
    config: {
        update: () => {},
    },
    DynamoDB: {
        DocumentClient: () => { return new mock_dynamo_client() }
    }
}

describe('Dynamo DB test suit', () => {
    it('SUCCESS: Dynamo client created', async () => {
        await dynamo_client(config_mock);
    })
    it('SUCCESS: Fetch all works', async () => {
        const client = await dynamo_client(config_mock, mock_aws);
        await client.fetch_all({} as unknown as IDynamoDBParams)
    })
    it('SUCCESS: Fetch one works', async () => {
        const client = await dynamo_client(config_mock, mock_aws);
        await client.fetch_one({} as unknown as IDynamoDBParams)
    })
    it('SUCCESS: Search works', async () => {
        const client = await dynamo_client(config_mock, mock_aws);
        await client.search({} as unknown as IDynamoDBParams)
    })
    it('SUCCESS: Insert works', async () => {
        const client = await dynamo_client(config_mock, mock_aws);
        await client.insert({} as unknown as IDynamoDBParams)
    })
    it('SUCCESS: Update works', async () => {
        const client = await dynamo_client(config_mock, mock_aws);
        await client.update({} as unknown as IDynamoDBParams)
    })
})
