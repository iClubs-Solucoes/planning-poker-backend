/// <reference types="mocha" />
import { expect } from 'chai';
import { getSprintsList } from '../../src/business/GetSprints'
import { gen_options } from '../../src/utils/GenerateOptions'

describe('Get Sprints Business test suit', () => {
    it('SUCCESS: Return as expected for API', async () => {
        await getSprintsList(await gen_options())
    })
})
