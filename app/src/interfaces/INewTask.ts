export interface INewTask {
    sprint_id: string;
    task_id: string;
    task_desc?: string;
    voting: boolean;
}