/// <reference types="mocha" />
import { APIGatewayEventDefaultAuthorizerContext, APIGatewayProxyEventBase, APIGatewayProxyResult } from 'aws-lambda';
import { expect } from 'chai';
import { status_code } from '../../src/constants/StatusCode';
import { getSprintsTasks } from '../../src/handler/GetSprintsTasks'

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
        const get_task_body = {
            sprint_id: "S1",
        }
        const resp = await getSprintsTasks({pathParameters: get_task_body} as unknown as APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>, context_mock, callback_mock) as unknown as APIGatewayProxyResult
        expect(resp.statusCode).to.be.eq(status_code.OK)
    })
    it('ERROR: No body on request', async () => {
        const resp = await getSprintsTasks({} as unknown as APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>, context_mock, callback_mock) as unknown as APIGatewayProxyResult
        expect(resp.statusCode).to.be.eq(status_code.BAD_REQUEST)
    })
    it('ERROR: Wrong body', async () => {
        const resp = await getSprintsTasks({body: { teste: false }} as unknown as APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>, context_mock, callback_mock) as unknown as APIGatewayProxyResult
        expect(resp.statusCode).to.be.eq(status_code.BAD_REQUEST)
    })
})
