import {Task, TaskState} from '../model/task.model';
import { Observable } from 'rxjs';

export interface ByStatutTaskService {
  getTasksByStatus(status: TaskState): Observable<Task[]>;
  getTasksAllStatus(): Observable<Task[]>;
}
