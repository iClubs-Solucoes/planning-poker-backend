export const getTaskItem = async (item: any, options: any) => {
    const { log, database } = options;

    log.debug_info('Generating item params');
    const params = await getTaskDynamoParams(item, options);
    log.debug_info('Params', params);
    
    log.debug_info('Getting item on database');
    const task = await database.fetch_one(params);
    log.debug_info('Returning info');

    return task;

}

const getTaskDynamoParams = async (item: any, options: any) => {
    const { TENANT, STAGE } = options.config
    return {
        TableName: `${STAGE}_${TENANT}_planning_poker`,
        Key: item
    }
}