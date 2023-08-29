// task-facade.service.ts
import { Injectable } from '@angular/core';
import { ByStatutTaskListService } from './by-statut-task-list-service.service';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  constructor(
    private byStatutService: ByStatutTaskListService
  ) {}

  getTasksByStatus(): Task[] {
    return this.byStatutService.getTasksByStatus();
  }

  getTasksAllStatus(): Task[] {
    return this.byStatutService.getTasksAllStatus();
  }
}
