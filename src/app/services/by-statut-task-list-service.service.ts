import {Injectable} from '@angular/core';
import {CRUDTaskListService} from './crudtask-list-service.service';
import {Task, TaskState} from '../model/task.model';
import {ByStatutTaskService} from "./by-statut-task-service";

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService extends CRUDTaskListService implements ByStatutTaskService {
  getTasksByStatus(): Task[] {
    return this.readTasks().filter(task => task.state === TaskState.TERMINEE);
  }

  getTasksAllStatus(): Task[] {
    return this.readTasks().filter(task => task.state != TaskState.TERMINEE);
  }
}
