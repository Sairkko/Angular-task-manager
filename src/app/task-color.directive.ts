import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import { TaskState } from './model/task.model';

@Directive({
  selector: '[appTaskColor]'
})
export class TaskColorDirective implements OnInit {
  @Input('appTaskColor') taskState!: TaskState;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    switch (this.taskState) {
      case TaskState.A_FAIRE:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
        break;
      case TaskState.EN_COURS:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
        break;
      case TaskState.TERMINEE:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
        break;
      default:
        break;
    }
  }
}
