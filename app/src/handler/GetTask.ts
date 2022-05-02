import { APIGatewayProxyHandler } from 'aws-lambda'
import { api_response } from '../utils/ApiResponse'
import { status_code } from '../constants/StatusCode'
import { gen_options } from '../utils/GenerateOptions'
import { IGetTask } from '../interfaces/IGetTask'
import { getTaskSchema } from '../schema/GetTask'
import { getTaskItem } from '../business/GetTask'
import { validate_joi } from '../utils/Validate'

export const getTask: APIGatewayProxyHandler = async (event) => {
    const options = await gen_options()
    const { log } = options;
    
    try{
        log.info('Event', event);

        if (!event.pathParameters) {
            throw new Error('missing pathParameters');
        }

        const pathParameters = await validate_joi(getTaskSchema, event.pathParameters) as unknown as IGetTask

        log.debug_info("pathParameters::", pathParameters)
        const task = await getTaskItem(pathParameters, options);

        log.debug_info("Returning Success Message")
        return await api_response(status_code.OK, task);
    }catch(e){
        log.debug_error(e)
        return await api_response(status_code.BAD_REQUEST, {  });
    }
}