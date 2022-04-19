import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root',
})


export class DataService {

  constructor(private Http: HttpClient) {}

  getUser(username: string) {
    const userUrl = `${environment.apiUrl}${username}`;

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3.raw',
      Authorization: `'token ${environment.apiKey}'`,
    };

    return this.Http.get(userUrl, { headers: headers });
  }
  

  //getting repository details
  getRepos(username: string) {
    const repoUrl = `${environment.apiUrl}${username}/repos`;

    console.log(repoUrl);

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3.raw',
      Authorization: `'token ${environment.apiKey}'`,
    };

    return this.Http.get(repoUrl, { headers: headers });
  }
}


