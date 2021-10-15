import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.maxStarsArr= Array(this.maxStars).fill(0);
  }
  @Input()
  maxStars=5;
  @Input()
  selectedStar=0;
  previousStar=0;
  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();  
  maxStarsArr :any;
  handlemouseenter(index: number){
    this.selectedStar=index+1;
  }
  handlemouseleave(){
    if(this.previousStar !=0){
      this.selectedStar=this.previousStar;
    }
    else
    this.selectedStar=0;
  }
  vote(index: number){
    this.selectedStar=index+1;
    this.previousStar=index+1;
    this.onRating.emit(this.selectedStar);
  }

}
