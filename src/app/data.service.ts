import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users = new Observable<any>();
  private username: string | undefined;


  constructor(private Http: HttpClient) { }

  // Method to get github profiles
  getProfile(username: any):Observable<any>{
    return this.Http.get<any>(`https://api.github.com/users/${username}?access_token=${environment.ghKey}`);
  }

  
  // updateProfile(username:string){
  //   this.username = username;
  // }
  
  
  // Method to get github repos
  getRepos(username: any):Observable<any[]>{
    return this.Http.get<any>(`https://api.github.com/users/${username}/repos?access_token=${environment.ghKey}`);
  }
  
}


