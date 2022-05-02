import Joi from 'joi'

export const getTaskSchema = Joi.object({
    sprint_id: Joi.string().required(),
    task_id: Joi.string().required(),
});