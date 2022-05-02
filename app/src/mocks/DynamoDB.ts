import { dynamo_client } from '../repositories/DynamoDB'

class mock_dynamo_client {
    public scan() { return this }
    public get() { return this }
    public query() { return this }
    public put() { return this }
    public update() { return this }
    public promise() { return { "Items": [{},{}], "Item": {} } }
}

const mock_aws = {
    config: {
        update: () => {},
    },
    DynamoDB: {
        DocumentClient: () => { return new mock_dynamo_client() }
    }
}

export const dynamo_mock = async (config_mock: any) => {
    return await dynamo_client(config_mock, mock_aws)
}