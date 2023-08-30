import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import {MainAddTaskFormComponent} from "../add-task/main-add-task-form/main-add-task-form.component";

const routes: Routes = [
  { path: '', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
