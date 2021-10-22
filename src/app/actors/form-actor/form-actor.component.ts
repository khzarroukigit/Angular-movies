import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreation } from '../actors.model';

@Component({
  selector: 'form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }
  form : FormGroup
  @Input()
  model:actorCreation;
  @Output()
  onSave : EventEmitter<actorCreation> = new EventEmitter<actorCreation>();

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name : ['', {validators : [Validators.required]
      }],
      dateOfBirth: ''
    });
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  save(){
    this.onSave.emit(this.form.value);
  }

}
