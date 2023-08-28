// task-facade.service.ts
import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crudtask-list-service.service';
import { ByStatutTaskListService } from './by-statut-task-list-service.service';
import { Task, TaskState } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  constructor(
    private crudService: CRUDTaskListService,
    private byStatutService: ByStatutTaskListService
  ) {}

  getTasksByStatus(): Task[] {
    return this.byStatutService.getTasksByStatus();
  }

  getTasksAllStatus(): Task[] {
    return this.byStatutService.getTasksAllStatus();
  }
}
