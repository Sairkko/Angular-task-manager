import {Injectable} from '@angular/core';
import {CRUDTaskListService} from './crudtask-list-service.service';
import {Task, TaskState} from '../model/task.model';
import {ByStatutTaskService} from "./by-statut-task-service";

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class ByStatutTaskListService extends CRUDTaskListService implements ByStatutTaskService {
=======
export class ByStatutTaskListService extends CRUDTaskListService {
>>>>>>> b39567d0c1a99166ad83e955c527da8a5845a0c9
  getTasksByStatus(): Task[] {
    return this.readTasks().filter(task => task.state === TaskState.TERMINEE);
  }

  getTasksAllStatus(): Task[] {
    return this.readTasks().filter(task => task.state != TaskState.TERMINEE);
  }
}
