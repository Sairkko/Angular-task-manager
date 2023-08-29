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

  private taskList: Task[] = [
    new Task('T1', 'Description de la tâche 1', TaskState.A_FAIRE, this.Date),
    new Task('T2', 'Description de la tâche 2', TaskState.EN_COURS, this.Date),
    new Task('T3', 'Description de la tâche 3', TaskState.TERMINEE, this.Date),
    new Task('T4: Road to Challenger', 'League of Legends', TaskState.TERMINEE, this.Date),
    new Task('T5: ROAD TO LIGUE 1 Saint-Étienne', 'Ils sont NUUUUUUUL', TaskState.TERMINEE, this.Date)
  ];

  readTasks(): Observable<Task[]> {
    return of(this.taskList); // Wrap the array in an observable
  }

  createTask(task: Task): void {
  }

  deleteTask(task: Task): void {
  }

  updateTask(task: Task): void {
  }
}
