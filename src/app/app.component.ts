import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  task: Task = {
    id: 123,
    title: "tarefas"


  };

  task2: Task = new Task(21,'tarefa constructor')


}

export class Task{
  public id: number;
  public title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title;
  }

} 