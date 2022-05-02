/// <reference types="mocha" />
import { expect } from 'chai';
import { createNewSprintTask } from '../../src/business/CreateNewSprintTask'
import { gen_options } from '../../src/utils/GenerateOptions'

describe('Create New Sprint Task Business test suit', () => {
    it('SUCCESS: Return as expected for API', async () => {
        await createNewSprintTask({sprint_id: "S1", task_id: "T1", voting: true}, await gen_options())
    })
})
