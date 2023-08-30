import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Task } from '../../model/task.model';
import { TaskFacade } from '../../services/task-facade.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  allTasks: Task[] = [];
  archivedTasks: Task[] = [];
  @Input() task: Task[] = [];

  constructor(private taskFacade: TaskFacade) {}

  ngOnInit(): void {
    this.taskFacade.getTasksAllStatus().subscribe(tasks => {
      this.allTasks = tasks;
    });

    this.taskFacade.getTasksByStatus().subscribe(tasks => {
      this.archivedTasks = tasks;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task']) {
      this.allTasks = changes['task'].currentValue;
    }
  }
}
