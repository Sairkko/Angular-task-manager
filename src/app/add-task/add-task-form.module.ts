import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { MainAddTaskFormComponent } from './main-add-task-form/main-add-task-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AddTaskFormComponent,
    MainAddTaskFormComponent
  ],
  exports: [
    AddTaskFormComponent,
    MainAddTaskFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AddTaskFormModule { }
