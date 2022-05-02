/// <reference types="mocha" />
import { APIGatewayEventDefaultAuthorizerContext, APIGatewayProxyEventBase, APIGatewayProxyResult } from 'aws-lambda';
import { expect } from 'chai';
import { status_code } from '../../src/constants/StatusCode';
import { changeTaskVotingStatus } from '../../src/handler/ChangeTaskVotingStatus'

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
        const change_status_body = {
            sprint_id: "S1",
            task_id: "T1",
            status: true
        }
        const resp = await changeTaskVotingStatus({pathParameters: change_status_body} as unknown as APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>, context_mock, callback_mock) as unknown as APIGatewayProxyResult
        expect(resp.statusCode).to.be.eq(status_code.OK)
    })
    it('ERROR: No body on request', async () => {
        const resp = await changeTaskVotingStatus({} as unknown as APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>, context_mock, callback_mock) as unknown as APIGatewayProxyResult
        expect(resp.statusCode).to.be.eq(status_code.BAD_REQUEST)
    })
    it('ERROR: Wrong body', async () => {
        const resp = await changeTaskVotingStatus({body: { teste: false }} as unknown as APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>, context_mock, callback_mock) as unknown as APIGatewayProxyResult
        expect(resp.statusCode).to.be.eq(status_code.BAD_REQUEST)
    })
})
