import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task.model';
import { TaskFacade } from '../../services/task-facade.service';

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
    this.taskFacade.getTasksAllStatus().subscribe(tasks => {
      this.allTasks = tasks;
    });

    this.taskFacade.getTasksByStatus().subscribe(tasks => {
      this.archivedTasks = tasks;
    });
  }
}
