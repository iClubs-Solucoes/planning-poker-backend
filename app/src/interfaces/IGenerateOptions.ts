import { ILogLib } from './ILogLib'
import { IDynamoDBClient } from './IDynamoDB'
import { IConfig } from './IConfig'

export interface IOptions {
    log: ILogLib;
    database: IDynamoDBClient;
    config: IConfig;
}

export interface IGenerateOptions {
    (force?: boolean): Promise<IOptions>
}