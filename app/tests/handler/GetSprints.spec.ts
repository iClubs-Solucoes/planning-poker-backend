/// <reference types="mocha" />
import { APIGatewayEventDefaultAuthorizerContext, APIGatewayProxyEventBase, APIGatewayProxyResult } from 'aws-lambda';
import { expect } from 'chai';
import { status_code } from '../../src/constants/StatusCode';
import { getSprints } from '../../src/handler/GetSprints'

const context_mock = {
    callbackWaitsForEmptyEventLoop: false,
    functionName: '',
    functionVersion: '',
    invokedFunctionArn: '',
    memoryLimitInMB: '',
    awsRequestId: '',
    logGroupName: '',
    logStreamName: '',
    getRemainingTimeInMillis: function (): number {
        throw new Error('Function not implemented.');
    },
    done: function (error?: Error, result?: any): void {
        throw new Error('Function not implemented.');
    },
    fail: function (error: string | Error): void {
        throw new Error('Function not implemented.');
    },
    succeed: function (messageOrObject: any): void {
        throw new Error('Function not implemented.');
    }
}

const callback_mock = () => {}

describe('Create New Sprint Task Business test suit', () => {
    it('SUCCESS: Return as expected for API', async () => {
        const resp = await getSprints({} as unknown as APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>, context_mock, callback_mock) as unknown as APIGatewayProxyResult
        expect(resp.statusCode).to.be.eq(status_code.OK)
    })
})
