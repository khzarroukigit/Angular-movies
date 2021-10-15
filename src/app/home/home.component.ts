import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Newmovies = [{
      title : 'Spider Man',
      releasedate : Date(),
      price : 1400.99,
      poster:"https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg"
    },{
      title : 'Ant Man',
      releasedate : Date(),
      price : 1100.99,
      poster:"https://fr.web.img4.acsta.net/pictures/15/05/06/16/05/305731.jpg"
    }
  ];
  this.Upmovies = [];
  }
  title = 'angular-movies';
  Newmovies : any;
  Upmovies:any;

}
