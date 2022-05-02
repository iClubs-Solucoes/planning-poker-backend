import Joi from 'joi'

export const newSprintTaskSchema = Joi.object({
    sprint_id: Joi.string().required(),
    task_id: Joi.string().required(),
    task_desc: Joi.string(),
    voting: Joi.boolean().default(false),
});