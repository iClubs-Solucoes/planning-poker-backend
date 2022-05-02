import { ICreateNewSprintTask, ICreateNewSprintTaskParams } from '../interfaces/ICreateNewSprintTask'

export const createNewSprintTask: ICreateNewSprintTask = async (task, options) => {
    const { database, log } = options;

    log.debug_info('Setting up database Params');
    const params = await createTaskDynamoParams(task, options);
    log.debug_info('Params', params);
    log.debug_info('Awaiting for insert');
    await database.insert(params);
    log.debug_info('Insert Done!!');
}

const createTaskDynamoParams: ICreateNewSprintTaskParams = async (task, options) => {
    const { TENANT, STAGE } = options.config
    return {
        TableName: `${STAGE}_${TENANT}_planning_poker`,
        Item: task
    }
}