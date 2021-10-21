import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formbuilder : FormBuilder) { }
  form : FormGroup

  genres = [{id : 1, name: "Drame"},{id :2, name:"Action"}];
  movies = [{
    title : 'Spider Man',
    poster:"https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg"
  },{
    title : 'Ant Man',
    poster:"https://fr.web.img4.acsta.net/pictures/15/05/06/16/05/305731.jpg"
  },{
    title : 'Inception',
    poster:"https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg"
  }
];
originalMovies = this.movies;
  ngOnInit(): void {
    this.form= this.formbuilder.group({
      title:'',
      genreId:0,
      upComingReleases : false,
      inTheaters : false
    })
    this.form.valueChanges.subscribe(values=>{
      this.movies = this.originalMovies;
      this.filterMovies(values);
    })
  }
  filterMovies(values : any){
    if(values.title){
      this.movies= this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }
  clear(){
    this.form.reset();
  }

}
