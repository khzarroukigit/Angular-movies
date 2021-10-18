import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { firstLetterUpperCaseValidator } from 'src/app/validators/firstLetterUpperCase';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router :Router, private formbuilder:FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      name:['',{
        validators:[Validators.required, Validators.minLength(3), firstLetterUpperCaseValidator()]
      }]
    });
  }
  save(){
    this.router.navigate(['genres']);
  }
  getErrorMessageFieldName(){
    const field = this.form.get('name');
    if(field?.hasError('required'))
      return 'the name field is required';
    if(field?.hasError('minlength'))
      return 'the min length of name is 3';
    if(field?.hasError('firstLetterUpperCaseValidator'))
      return field.getError('firstLetterUpperCaseValidator').message;
    return '';
  }

}
