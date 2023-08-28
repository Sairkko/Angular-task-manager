import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import {TaskComponent} from "./task/task.component";
import {MainTaskComponent} from "./main-task/main-task.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskColorDirective} from "../task-color.directive";
import {CustomDatePipe} from "../custom-date.pipe";

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
    TasksRoutingModule
  ],
  exports: []
})
export class TasksModule { }
