import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUpperCaseValidator } from 'src/app/validators/firstLetterUpperCase';
import { genresCreation } from '../genres.model';

@Component({
  selector: 'form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }

  @Input()
  model : genresCreation;
  form: FormGroup;
  @Output()
  onSave : EventEmitter<genresCreation> = new EventEmitter<genresCreation>();

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      name:['',{
        validators:[Validators.required, Validators.minLength(3), firstLetterUpperCaseValidator()]
      }]
    });
    if(this.model !== undefined)
    this.form.patchValue(this.model);
    
  }
  save(){
    this.onSave.emit(this.form.value);
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
