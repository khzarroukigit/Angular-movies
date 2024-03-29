import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilities';

@Component({
  selector: 'input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }
  image :string;

  @Input()
  imageURL:string;

  @Output()
  onImageSelected = new EventEmitter<File>();

  ngOnInit(): void {
  }
  change(event :any){
    if(event.target.files.length > 0){
      let file : File = event.target.files[0];
      toBase64(file).then((value :any) => this.image = value);
      this.onImageSelected.emit(file);
      this.imageURL = '';
    }
  }

}
