import { IAPIResponse } from '../interfaces/IAPIResponse'

export const api_response: IAPIResponse = async (status_code, body) => {
    return {
        statusCode: status_code,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify(body),
    };
}