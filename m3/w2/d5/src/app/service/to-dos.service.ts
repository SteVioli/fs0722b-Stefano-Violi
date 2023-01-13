import { Injectable } from '@angular/core';
import { ToDo } from '../interface/to-do';
@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  toDo:ToDo[] = []

  constructor() { }

  counter = 0;

  getTotalTask():ToDo[]{
    return this.toDo
  }

  checkCompleted(id:number){
    this.toDo.forEach((toDo)=>{
      if (toDo.id == id){
        toDo.completed = !toDo.completed
      }
    })
  }
}
