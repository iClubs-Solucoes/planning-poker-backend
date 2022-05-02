/// <reference types="mocha" />
import { expect } from 'chai';
import { logger } from '../../src/utils/Logger'

const fake_temrinal = () => {}
const debug_true = "true";
const debug_false = "false";

describe('Logger test suit', () => {
    it('SUCCESS: Return log object', () => {
        try{
            logger();
        }catch(e){
            expect(e).to.be.null;
        }
    })
    it('SUCCESS: Logs a info message', () => {
        const log = logger(debug_false, fake_temrinal);
        log.info('erro teste')
    })
    it('SUCCESS: Logs a warning message', () => {
        const log = logger(debug_false, fake_temrinal);
        log.warning('erro teste')
    })
    it('SUCCESS: Logs a error message', () => {
        const log = logger(debug_false, fake_temrinal);
        log.error('erro teste')
    })
    it('SUCCESS: Logs a debug error message', () => {
        const log = logger(debug_true, fake_temrinal);
        log.debug_error('erro teste')
    })
    it('SUCCESS: Logs a debug warning message', () => {
        const log = logger(debug_true, fake_temrinal);
        log.debug_warning('erro teste')
    })
    it('SUCCESS: Logs a debug info message', () => {
        const log = logger(debug_true, fake_temrinal);
        log.debug_info('erro teste')
    })
    it('SUCCESS: Wont log a debug messages if the flash is set to false', () => {
        const log = logger(debug_false, fake_temrinal);
        log.debug_info('erro teste')
    })
})
