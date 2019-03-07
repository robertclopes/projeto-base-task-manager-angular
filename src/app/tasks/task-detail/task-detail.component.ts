import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import "rxjs/add/operator/switchMap";

import { Task } from "../shared/tasks.model";
import { TaskService } from "../shared/tasks.service";

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
  public task: Task;

  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ){ }

  public ngOnInit(){
    this.route.params
      .switchMap((params: Params) => this.taskService.gestTask(+params['id']))
      .subscribe(task => this.task = task)
  }
}