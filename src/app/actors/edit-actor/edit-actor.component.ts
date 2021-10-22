import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreation } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute ) { }

  model :actorCreation = {name:"Tom Holand", dateOfBirth : new Date()};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      //alert(params.id);
    });
  }
  save(actorCreation : actorCreation){
    console.log(actorCreation);

  }

}
