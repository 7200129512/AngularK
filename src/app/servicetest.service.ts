import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iuser } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicetestService {

  constructor(private http:HttpClient) { }

  saveuser(user:any):Observable<iuser>
  {
    return this.http.post<iuser>("localhost:40523", user);
  }
  getuser():Observable<iuser[]>
  {
    return this.http.get<iuser[]>("localhost:40523");
  }
  updateuser(user:any):Observable<iuser>
  {
    return this.http.put<iuser>("localhost:40523",user);
  }
  deleteuser(user:any):Observable<any>
  {
    return this.http.delete<any>("localhost:40523",user);
  }
}
