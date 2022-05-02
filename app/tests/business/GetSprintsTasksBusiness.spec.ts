/// <reference types="mocha" />
import { expect } from 'chai';
import { getSprintsTasksList } from '../../src/business/GetSprintsTasks'
import { gen_options } from '../../src/utils/GenerateOptions'

describe('Get Sprints Tasks Business test suit', () => {
    it('SUCCESS: Return as expected for API', async () => {
        await getSprintsTasksList("s1", await gen_options())
    })
})
