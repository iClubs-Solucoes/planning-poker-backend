/// <reference types="mocha" />
import { expect } from 'chai';
import { validate_joi } from '../../src/utils/Validate';
import Joi from 'joi';

const schema = Joi.object({
    first: Joi.string().required(),
    last: Joi.string(),
    default: Joi.boolean().default(true),
});

const first = 'primeiro';
const last = 'ultimo';

describe('Validate test suit', () => {
    it('SUCCESS: Success on validating a body', () => {
        const result = validate_joi(schema, { first });
        expect(JSON.stringify(result)).to.be.eq(JSON.stringify({first,default: true}));
    })
    it('ERROR: Throw error when validation fails', () => {
        try{
            validate_joi(schema, { last });
        }catch(e){
            expect(e).to.not.be.null;
        }
    })
})
