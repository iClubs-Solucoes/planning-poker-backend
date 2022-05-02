import Joi from 'joi'

export const changeTaskVotingStatusSchema = Joi.object({
    sprint_id: Joi.string().required(),
    task_id: Joi.string().required(),
    status: Joi.boolean().required(),
});