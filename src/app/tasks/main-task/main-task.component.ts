import { Component } from '@angular/core';
import {Task} from "../../model/task.model";

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent {
  public allTasks: Task[] = [];

  onTaskSubmitted(newTask: Task): void {
    this.allTasks.push(newTask); // Ajoutez la nouvelle tâche à la liste
  }
}
