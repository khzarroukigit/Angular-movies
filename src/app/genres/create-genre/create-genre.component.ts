import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { firstLetterUpperCaseValidator } from 'src/app/validators/firstLetterUpperCase';
import { genresCreation } from '../genres.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router :Router) { }

  

  ngOnInit(): void {
   
  }
  save(genresCreation : genresCreation){
    console.log(genresCreation);
    this.router.navigate(['genres']);
  }
  

}
