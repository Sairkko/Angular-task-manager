import { Task, TaskState } from '../model/task.model';

export interface ByStatutTaskService {
  getTasksByStatus(status: TaskState): Task[];
  getTasksAllStatus(): Task[];
}
