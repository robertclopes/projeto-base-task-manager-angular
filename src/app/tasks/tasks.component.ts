import { Component, OnInit  } from '@angular/core';

import { Task } from './shared/tasks.model';
import { TaskService } from './shared/tasks.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  providers: [ TaskService ]
})

export class TasksComponent implements OnInit{
  public tasks: Array<Task>;
  public selectedTask: Task;
  //private taskService: TaskService;

  public constructor(private taskService: TaskService){
  //  this.taskService = taskService;
  }

  public ngOnInit(){
    this.tasks = this.taskService.getTasks();
  }

  public onSelect(task: Task): void{
    this.selectedTask = task;
  }

}