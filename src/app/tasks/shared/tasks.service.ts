import { Injectable } from "@angular/core";

import { Task } from "./tasks.model";

const TASKS: Array<Task> = [
  { id: 1, title: 'Fazer tarefa 1'},
  { id: 2, title: 'Fazer tarefa 2'},
  { id: 3, title: 'Fazer tarefa 3'},
  { id: 4, title: 'Fazer tarefa 4'},
  { id: 5, title: 'Fazer tarefa 5'},
  { id: 6, title: 'Fazer tarefa 6'},
  { id: 7, title: 'Fazer tarefa 7'},
];

@Injectable()

export class TaskService{

  public getTasks(): Promise<Task[]>{
    let promise = new Promise(function(resolve, reject){
      if(TASKS.length > 0){
        setTimeout(function(){
          resolve(TASKS);
        }, 2000);
        
      }else{
        let error_msg = "NAO HA TAREFAS";
        reject(error_msg)
      }
    })
    return promise;  
  }
      
  public getImportantTasks(): Promise<Task[]>{
    return Promise.resolve(TASKS.slice(0, 3));
  }

  public gestTask(id: number): Promise<Task>{
    return this.getTasks()
      .then(tasks => tasks.find(task => task.id === id))
  }
}