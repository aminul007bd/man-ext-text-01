import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'man-ext-text-01';
  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 12312312312312,
    isFavorite: false,
  };
}
