/// <reference types="mocha" />
import { expect } from 'chai';
import { getTaskItem } from '../../src/business/GetTask'
import { gen_options } from '../../src/utils/GenerateOptions'

describe('Get Task Business test suit', () => {
    it('SUCCESS: Return as expected for API', async () => {
        await getTaskItem({ "sprint_id": "s1", "task_id": "t1" }, await gen_options())
    })
})
