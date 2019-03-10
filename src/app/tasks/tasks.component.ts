import { Component, OnInit  } from '@angular/core';

import { Task } from './shared/tasks.model';
import { TaskService } from './shared/tasks.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit{
  public tasks: Array<Task>;
  public selectedTask: Task;
  //private taskService: TaskService;

  public constructor(private taskService: TaskService){
  //  this.taskService = taskService;
  }

  public ngOnInit(){
    this.taskService.getTasks()
      .subscribe(
        tasks => this.tasks = tasks,
        error =>  alert ("Ocorreu um erro no servidor, tente mais tarde.")
      )
  }

  public onSelect(task: Task): void{
    this.selectedTask = task;
  }
}