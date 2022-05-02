export const updateVotingStatus = async (item: any, status: any, options: any) => {
    const { log, database } = options;

    log.debug_info('Generating item params');
    const params = await getTaskStatusDynamoParams(item, status, options);
    log.debug_info('Params', params);
    
    log.debug_info('Getting item on database');
    const task = await database.update(params);
    log.debug_info('Returning info');

    return task;

}

const getTaskStatusDynamoParams = async (item: any, status: any, options: any) => {
    const { TENANT, STAGE } = options.config
    return {
        TableName: `${STAGE}_${TENANT}_planning_poker`,
        Key: item,
        UpdateExpression: 'set voting = :v',
        ExpressionAttributeValues: {
            ':v': status
        }
    }
}