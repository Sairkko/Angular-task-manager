// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskFacade } from '../../services/task-facade.service';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  allTasks: Task[] = [];
  archivedTasks: Task[] = [];

  constructor(private taskFacade: TaskFacade) {}

  ngOnInit(): void {
    this.allTasks = this.taskFacade.getTasksAllStatus();
    this.archivedTasks = this.taskFacade.getTasksByStatus();
  }
}
