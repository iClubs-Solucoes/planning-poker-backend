export const getSprintsList = async (options: any) => {
    const { log, database } = options;

    log.debug_info('Generating item params');
    const params = await getTaskDynamoParams(options);
    log.debug_info('Params', params);
    
    log.debug_info('Getting item on database');
    const task = await database.fetch_all(params);
    log.debug_info('Returning info');

    let sprints = []

    for(const sprint of task.Items){
        sprints.push(sprint.sprint_id)
    };

    return sprints

}

const getTaskDynamoParams = async (options: any) => {
    const { TENANT, STAGE } = options.config
    return {
        TableName: `${STAGE}_${TENANT}_planning_poker`,
        ProjectionExpression: 'sprint_id'
    }
}