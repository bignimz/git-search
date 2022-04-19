import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { Repository } from '../repository';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

 username!: string;
 user!: User;
 repo!: Repository[];

 hideInput!: boolean; // Declare hideinput as a boolean property

 public showInput = true; // Assign showInput boolean value true
 public showData = false; // Assign showData boolean value false

 submitUser() {
  this.dataService.getUser(this.username).subscribe((data: any) => {
    this.user = new User(
      data.name,
      data.login,
      data.avatar_url,
      data.html_url,
      data.location,
      data.bio,
      data.public_repos,
      data.followers,
      data.following,
      data.public_gists,
      data.company,
      data.created_at
    );
    console.log('User', this.user);
    this.showData = true;
  });

  this.dataService.getRepos(this.username).subscribe((data: any) => {
    this.repo = data;
    console.log('Repos', this.repo);
  });
}
  

  constructor(private dataService: DataService) { }

  @Output() toggleBack = new EventEmitter();

  showUserInput() {
    // this.showInput = hideInput;
    this.showData = false;
  }

  showRepos(){
    this.hideInput = true;
    this.toggleBack.emit(this.hideInput);
  }


  ngOnInit(): void {
    this.dataService.getUser(this.username);
    this.dataService.getRepos(this.username);
  }
}
