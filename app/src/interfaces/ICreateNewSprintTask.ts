import { INewTask } from './INewTask'
import { IDynamoDBParams } from './IDynamoDB'
import { IAWSConfig } from './IAWSConfig'
import { IOptions } from './IGenerateOptions'

export interface ICreateNewSprintTask {
    (task: INewTask, options: IOptions): Promise<void>
}

export interface ICreateNewSprintTaskParams {
    (task: INewTask, options: IOptions): Promise<IDynamoDBParams>
}