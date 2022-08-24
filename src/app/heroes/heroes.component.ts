import { Hero } from '../interface/hero';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  @Input() mediaItem: any;
  @Output() delete = new EventEmitter();
  hero: Hero = {
    id: 1,
    title: 'Windstorm',
  };

  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    console.log('I am clicked');
  }

  onMediaItemDelete() {
    this.delete.emit(this.mediaItem);
  }
}
