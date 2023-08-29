import { Task } from '../model/task.model';
import { Observable } from 'rxjs';

export interface CRUDTaskService {
  createTask(task: Task): void;
  readTasks(): Observable<Task[]>; // Change the return type to Observable<Task[]>
  updateTask(task: Task): void;
  deleteTask(task: Task): void;
}
