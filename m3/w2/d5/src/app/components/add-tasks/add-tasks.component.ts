import { Component, Input, OnInit } from '@angular/core';
import { ToDosService } from 'src/app/service/to-dos.service';
import { ToDo } from 'src/app/interface/to-do';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss'],
})
export class AddTasksComponent implements OnInit {
  @Input()toDo:any

  constructor(public todoServ: ToDosService) {}


  addTask(valore: string) {
    if(valore){
    setTimeout(() => {
      this.toDo.push({
        id:this.todoServ.counter++,
        title: valore,
        completed: true,
      })
    }, 2000);
    console.log(this.toDo);
  }else{
    alert ('Compilare il campo input')
    return
  }
}
  ngOnInit(): void {
    this.toDo = this.todoServ.getTotalTask();
  }
}
