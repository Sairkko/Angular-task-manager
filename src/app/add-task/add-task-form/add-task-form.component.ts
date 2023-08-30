import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Task, TaskState} from '../../model/task.model';
import {CRUDTaskListService} from "../../services/crudtask-list-service.service"; // Assurez-vous d'importer le modèle Task

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {
  @Output() taskSubmitted = new EventEmitter<Task>();

  public taskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
    description: ['', Validators.required],
    state: [[], Validators.required],
    date: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.taskForm.valid) {
      const formValues = this.taskForm.value;

      const newTask: Task = {
        title: formValues.title || '',
        description: formValues.description || '',
        state: formValues.state || TaskState.A_FAIRE,
        date: formValues.date ? new Date(formValues.date) : new Date()
      };
      this.taskSubmitted.emit(newTask);
    } else {
      this.taskForm.markAllAsTouched();
    }
  }
}
