import {Injectable} from '@angular/core';
import {CRUDTaskListService} from './crudtask-list-service.service';
import {Task, TaskState} from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService extends CRUDTaskListService implements ByStatutTaskListService {
  getTasksByStatus(): Task[] {
    return this.readTasks().filter(task => task.state === TaskState.TERMINEE);
  }

  getTasksAllStatus(): Task[] {
    return this.readTasks().filter(task => task.state != TaskState.TERMINEE);
  }
}
