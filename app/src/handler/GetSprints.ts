import { APIGatewayProxyHandler } from 'aws-lambda'
import { api_response } from '../utils/ApiResponse'
import { status_code } from '../constants/StatusCode'
import { gen_options } from '../utils/GenerateOptions'
import { getSprintsList } from '../business/GetSprints'

export const getSprints: APIGatewayProxyHandler = async (event) => {
    const options = await gen_options()
    const { log } = options;
    
    try{
        log.info('Event', event);
        
        const sprints: Array<string> = await getSprintsList(options);

        log.debug_info("Returning Success Message")
        return await api_response(status_code.OK, { "Items": [...new Set<string>(sprints)] });
    }catch(e){
        log.debug_error(e)
        return await api_response(status_code.BAD_REQUEST, {  });
    }
}