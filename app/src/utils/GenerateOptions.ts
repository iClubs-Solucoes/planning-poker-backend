import { dynamo_client } from '../repositories/DynamoDB'
import { logger } from '../utils/Logger'
import { config } from '../aws/config'
import { dynamo_mock } from '../mocks/DynamoDB'
import { mock_logger } from '../mocks/Logger'
import { config_mock } from '../mocks/config'
import { IGenerateOptions, IOptions } from '../interfaces/IGenerateOptions'

export const gen_options: IGenerateOptions = async (force = false) => {
    if (process.env.NODE_ENV === 'test' && force === false) {
        return {
            log: mock_logger(),
            database: await dynamo_mock(config_mock),
            config: config_mock,
        } as unknown as IOptions;
    }

    return {
        log: logger(process.env.DEBUG),
        database: await dynamo_client(config),
        config: config,
    };
}