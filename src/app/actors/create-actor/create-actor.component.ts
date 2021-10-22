import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreation } from '../actors.model';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  save(actorCreation : actorCreation){
    // this.router.navigate(['actors']);
    console.log(actorCreation);
  }

}
