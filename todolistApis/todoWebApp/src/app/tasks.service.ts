import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';

const baseurl = "http://localhost:3000/tasks";

var httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) { }

getTasks(){
  return this._http.get(baseurl);
}

createTask(task:any){
  return this._http.post(baseurl,JSON.stringify(task),httpOptions);
}

updateTask(id:any,task:any){
  return this._http.put(baseurl+"/"+id,JSON.stringify(task),httpOptions);
}

deleteTask(id:any){
  return this._http.delete(baseurl+"/"+id);
}

}
