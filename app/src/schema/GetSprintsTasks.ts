import Joi from 'joi'

export const getSprintsTasksSchema = Joi.object({
    sprint_id: Joi.string().required(),
});