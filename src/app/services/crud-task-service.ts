import { Task } from '../model/task.model';

export interface CRUDTaskService {
  createTask(task: Task): void;
  readTasks(): Task[];
  updateTask(task: Task): void;
  deleteTask(task: Task): void;
}
