import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crudtask-list-service.service';
import { Task, TaskState } from '../model/task.model';
import { ByStatutTaskService } from "./by-statut-task-service";
import {map, Observable, of} from 'rxjs'; // Import 'of' for creating an observable

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService extends CRUDTaskListService implements ByStatutTaskService {

  getTasksByStatus(): Observable<Task[]> {
    return this.readTasks().pipe(
      map(tasks => tasks.filter(task => task.state === TaskState.TERMINEE))
    );
  }

  getTasksAllStatus(): Observable<Task[]> {
    return this.readTasks().pipe(
      map(tasks => tasks.filter(task => task.state !== TaskState.TERMINEE))
    );
  }
}
