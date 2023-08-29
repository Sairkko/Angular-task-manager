// crud-task-list.service.ts
import {Injectable} from '@angular/core';
import {Task, TaskState} from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService {
  public Date: Date = new Date();

  private taskList: Task[] = [
    new Task('T1', 'Description de la tâche 1', TaskState.A_FAIRE, this.Date),
    new Task('T2', 'Description de la tâche 2', TaskState.EN_COURS, this.Date),
    new Task('T3', 'Description de la tâche 3', TaskState.TERMINEE, this.Date),
    new Task('T4: Road to Challenger', 'League of Legends', TaskState.TERMINEE, this.Date),
    new Task('T5: ROAD TO LIGUE 1 Saint-Étienne', 'Ils sont NUUUUUUUL', TaskState.TERMINEE, this.Date)
  ];

  readTasks(): Task[] {
    return this.taskList;
  }
}
