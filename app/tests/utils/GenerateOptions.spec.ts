/// <reference types="mocha" />
import { gen_options } from '../../src/utils/GenerateOptions'

describe('Generate Options test suit', () => {
    it('SUCCESS: Generate options getting from env', async () => {
        await gen_options(true);
    })
    it('SUCCESS: Generate options mocking returns', async () => {
        await gen_options();
    })
})
