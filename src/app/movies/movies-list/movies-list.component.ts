import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      
  }
  @Input()
  movies :any;
  remove(index :number){
    this.movies.splice(index, 1);
  }

}
