import {Component, EventEmitter, Output} from '@angular/core';
import { CRUDTaskListService } from '../../services/crudtask-list-service.service';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.css']
})
export class MainAddTaskFormComponent {
  @Output() taskSubmitted = new EventEmitter<Task>();
  constructor(private crudTaskListService: CRUDTaskListService) {}


  onAddTask(task: Task): void {
    this.crudTaskListService.createTask(task);
  }

}
