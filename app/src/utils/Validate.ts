export const validate_joi = (schema: any, body: any): Promise<any> => {
    const result = schema.validate(body)
    if('error' in result) {
        throw new Error('erro de validação')
    }

    return result.value
}