import { APIGatewayProxyHandler } from 'aws-lambda'
import { api_response } from '../utils/ApiResponse'
import { status_code } from '../constants/StatusCode'
import { gen_options } from '../utils/GenerateOptions'
import { updateVotingStatus } from '../business/ChangeTaskVotingStatus'
import { validate_joi } from '../utils/Validate'
import { changeTaskVotingStatusSchema } from '../schema/ChangeTaskVotingStatus'
import { IChangeTaskVotingStatus } from '../interfaces/IChangeTaskVotingStatus'

export const changeTaskVotingStatus: APIGatewayProxyHandler = async (event) => {
    const options = await gen_options()
    const { log } = options;
    
    try{
        log.info('Event', event);
        
        if (!event.pathParameters) {
            throw new Error('missing pathParameters');
        }

        const pathParameters = await validate_joi(changeTaskVotingStatusSchema, event.pathParameters) as unknown as IChangeTaskVotingStatus
        
        log.debug_info(pathParameters);
        const { sprint_id, task_id, status } = pathParameters
        const task = await updateVotingStatus({ sprint_id, task_id }, status, options);

        log.debug_info("Returning Success Message")
        return await api_response(status_code.OK, task);
    }catch(e){
        log.debug_error(e)
        return await api_response(status_code.BAD_REQUEST, {  });
    }
}