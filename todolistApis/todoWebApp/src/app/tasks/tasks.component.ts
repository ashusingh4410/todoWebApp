import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks:any;
  id="";

  public newTask = {
    title:"",
    description:""
  }


  constructor(private taskService: TasksService) { }

  ngOnInit():void{
    this.getTasks();
   }

   getTasks(){
    this.taskService.getTasks().subscribe(res=>{
      this.tasks=res;
   })
  }

   createTask(){
     this.taskService.createTask(this.newTask).subscribe(res=>{
       this.getTasks();
     })
   }

   deleteTask(id:any){
    this.taskService.deleteTask(id).subscribe(res=>{
      this.getTasks();
    })
   }

   setUpdate(t:any){
      this.id = t._id;
      this.newTask.title = t.title;
      this.newTask.description = t.description;
   }

   cleanValues(){
     this.id= "";
     this.newTask = {
       title:"",
       description:""
     }
   }

   updateTask(){
    this.taskService.updateTask(this.id,this.newTask).subscribe(res=>{
      this.getTasks();
   })

}
}

