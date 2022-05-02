/// <reference types="mocha" />
import { expect } from 'chai';
import { updateVotingStatus } from '../../src/business/ChangeTaskVotingStatus'
import { gen_options } from '../../src/utils/GenerateOptions'

describe('Get Sprints Business test suit', () => {
    it('SUCCESS: Return as expected for API', async () => {
        await updateVotingStatus({sprint_id: "S1", task_id: "T1"}, false, await gen_options())
    })
})
