import { Component, OnInit } from '@angular/core';
import { ToDosService } from 'src/app/service/to-dos.service';
import { ToDo } from 'src/app/interface/to-do';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(public todoServ: ToDosService) {
    this.getTask()
    console.log(this.toDo)
  }

  toDo:ToDo[] = []

  toDoNonCompletati:ToDo[] = []

  ngOnInit(): void {
    this.getTask()
  }
  getTask(){
    this.toDo = this.todoServ.getTotalTask();
    this.toDoNonCompletati = this.toDo.filter((a)=>{
        if(a.completed == false){
          return true
        }else{
          return false
        }
    })
  }
  removeToDo(valore:number){
    this.toDo = this.toDo.splice(valore,1)
    this.getTask()
  }
}
