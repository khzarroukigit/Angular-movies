import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreation, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute ) { }

  model :actorDTO = {name:"Tom Holand", dateOfBirth : new Date(), picture : 'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/cinema/dossiers/tom-hardy-un-impertinent-a-hollywood-3025447/60363727-1-fre-FR/Tom-Hardy-un-impertinent-a-Hollywood.jpg'};

  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      //alert(params.id);
    });
  }
  save(actorCreation : actorCreation){
    console.log(actorCreation);

  }

}
