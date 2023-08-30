// crud-task-list.service.ts
import {Injectable} from '@angular/core';
import {Task, TaskState} from '../model/task.model';
import {CRUDTaskService} from "./crud-task-service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CRUDTaskListService implements CRUDTaskService {
  public Date: Date = new Date();

  public taskList: Task[] = [
    new Task('T1', 'Description de la tâche 1', TaskState.A_FAIRE, this.Date),
  ];

  readTasks(): Observable<Task[]> {
    return of(this.taskList);
  }

  createTask(task: Task): void {
    this.taskList.push(task);
  }

  deleteTask(task: Task): void {
  }

  updateTask(task: Task): void {
  }
}
