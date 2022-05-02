import { APIGatewayProxyHandler } from 'aws-lambda'
import { api_response } from '../utils/ApiResponse'
import { validate_joi } from '../utils/Validate'
import { newSprintTaskSchema } from '../schema/NewSprintTask'
import { INewTask } from '../interfaces/INewTask'
import { createNewSprintTask } from '../business/CreateNewSprintTask'
import { status_code } from '../constants/StatusCode'
import { gen_options } from '../utils/GenerateOptions'

export const newSprintTask: APIGatewayProxyHandler = async (event) => {
    const options = await gen_options()
    const { log } = options;

    try{
        log.info("Event", JSON.stringify(event));

        if (!event.body) {
            throw new Error('missing body');
        }
        
        const body = await validate_joi(newSprintTaskSchema, JSON.parse(event.body)) as unknown as INewTask

        log.debug_info("Validated Body", body)
        await createNewSprintTask(body, options);

        log.debug_info("Returning Success Message")
        return await api_response(status_code.CREATED, {  });
    }catch(e){
        log.debug_error(e)
        return await api_response(status_code.BAD_REQUEST, {  });
    }
}