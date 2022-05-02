/// <reference types="mocha" />
import { expect } from 'chai';
import { api_response } from '../../src/utils/ApiResponse'
import { status_code } from '../../src/constants/StatusCode'
import { IAPIResponseReturn } from '../../src/interfaces/IAPIResponse'

const return_body = { id: 'teste01' }

describe('Api Response test suit', () => {
    it('SUCCESS: Return as expected for API', async () => {
        const expected_return: IAPIResponseReturn = {
            statusCode: status_code.OK,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify(return_body)
        }
        const retorno = await api_response(status_code.OK, return_body);
        expect(JSON.stringify(expected_return)).to.be.eq(JSON.stringify(retorno))
    })
})
