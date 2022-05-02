import { APIGatewayProxyHandler } from 'aws-lambda'
import { api_response } from '../utils/ApiResponse'
import { status_code } from '../constants/StatusCode'
import { gen_options } from '../utils/GenerateOptions'
import { getSprintsTasksList } from '../business/GetSprintsTasks'
import { validate_joi } from '../utils/Validate'
import { getSprintsTasksSchema } from '../schema/GetSprintsTasks'
import { IGetSprintsTasks } from '../interfaces/IGetSprintsTasks'

export const getSprintsTasks: APIGatewayProxyHandler = async (event) => {
    const options = await gen_options()
    const { log } = options;
    
    try{
        log.info('Event', event);        

        if (!event.pathParameters) {
            throw new Error('missing pathParameters');
        }

        const pathParameters = await validate_joi(getSprintsTasksSchema, event.pathParameters) as unknown as IGetSprintsTasks
        
        const { sprint_id } = pathParameters as IGetSprintsTasks;
        const sprints: Array<string> = await getSprintsTasksList(sprint_id, options);

        log.debug_info("Returning Success Message")
        return await api_response(status_code.OK, { "Items": [...new Set<string>(sprints)] });
    }catch(e){
        log.debug_error(e)
        return await api_response(status_code.BAD_REQUEST, {  });
    }
}