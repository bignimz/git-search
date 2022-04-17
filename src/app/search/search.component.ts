import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

private username: string | undefined;  
  

  constructor(private dataService: DataService) { }

 
  ngOnInit(): void {
  }

  findUser() {

  }

}
