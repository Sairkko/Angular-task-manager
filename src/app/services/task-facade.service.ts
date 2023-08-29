// task-facade.service.ts
import { Injectable } from '@angular/core';
import { ByStatutTaskListService } from './by-statut-task-list-service.service';
import { Task } from '../model/task.model';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  constructor(
    private byStatutService: ByStatutTaskListService
  ) {}

  getTasksByStatus(): Observable<Task[]> {
    return this.byStatutService.getTasksByStatus();
  }

  getTasksAllStatus(): Observable<Task[]> {
    return this.byStatutService.getTasksAllStatus();
  }
}
