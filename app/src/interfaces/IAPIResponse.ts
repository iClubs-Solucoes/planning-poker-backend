export interface IAPIResponseReturn {
    statusCode: number,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: string;
}

export interface IAPIResponse {
    (status_code: number, body: unknown): Promise<IAPIResponseReturn>
}

