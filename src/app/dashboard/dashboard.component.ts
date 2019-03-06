import { Component, OnInit } from "@angular/core";

import { Task } from "../tasks/shared/tasks.model";
import { TaskService  } from "../tasks/shared/tasks.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  public tasks: Task[];
  public constructor(private taskService: TaskService){
  }

  public ngOnInit(){
    this.taskService.getImportantTasks()
      .then((tasks) => this.tasks = tasks);
  }
}

