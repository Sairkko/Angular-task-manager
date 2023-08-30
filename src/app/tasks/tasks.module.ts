import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import {TaskComponent} from "./task/task.component";
import {MainTaskComponent} from "./main-task/main-task.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskColorDirective} from "../task-color.directive";
import {CustomDatePipe} from "../custom-date.pipe";
import {AddTaskFormModule} from "../add-task/add-task-form.module";
import {MainAddTaskFormComponent} from "../add-task/main-add-task-form/main-add-task-form.component";

@NgModule({
  declarations: [
    TaskComponent,
    MainTaskComponent,
    TaskListComponent,
    TaskColorDirective,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    AddTaskFormModule
  ],
  exports: []
})
export class TasksModule { }
