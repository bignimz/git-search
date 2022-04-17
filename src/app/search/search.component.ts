import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public username: string | undefined;
  public githubUserQuery: string | undefined;
  public githubProfile: any;
  public githubRepos: any;
  

  constructor(private dataService: DataService) { }

  public findProfile(){
    // this.dataService.updateProfile();
    // this.
  }

  public searchUser(){
    this.dataService.getProfile(this.username).subscribe((data) =>{
      this.githubProfile = data;
    });

    this.dataService.getRepos(this.username).subscribe((data)=> {
      this.githubRepos
    })
  }

  ngOnInit(): void {
  }

}
