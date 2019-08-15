import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* @Injectable({
  providedIn: 'root'
}) */
@Injectable()
export class AppComponentService {

  constructor(private http: HttpClient) { }
 
  public getFeatures(){
     return this.http.get('https://localhost:5001/api/todo');
  }

  public submitSignup(data){
    debugger;
    this.http.post('https://jsonplaceholder.typicode.com/posts', data).subscribe();
 }
}
