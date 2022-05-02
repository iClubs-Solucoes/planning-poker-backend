export const getSprintsTasksList = async (sprint_id: any, options: any) => {
    const { log, database } = options;

    log.debug_info('Generating item params');
    const params = await getTaskDynamoParams(sprint_id, options);
    log.debug_info('Params', params);
    
    log.debug_info('Getting item on database');
    const task = await database.search(params);
    log.debug_info('Returning info');
    log.debug_info('Return from Dynamo', task);

    let sprints = []

    for(const sprint of task.Items){
        sprints.push(sprint.task_id)
    };

    return sprints

}

const getTaskDynamoParams = async (sprint_id: any, options: any) => {
    const { TENANT, STAGE } = options.config
    return {
        TableName: `${STAGE}_${TENANT}_planning_poker`,
        KeyConditionExpression: 'sprint_id = :sprintId',
        ProjectionExpression: 'task_id',
        ExpressionAttributeValues: {
            ":sprintId": sprint_id
        }
    }
}