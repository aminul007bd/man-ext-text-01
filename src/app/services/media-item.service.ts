import { Injectable } from '@angular/core';
import { MediaItem } from '../interface/media-list-item';
import { ITEMS } from '../mock-media-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  mediaItems = ITEMS;
  constructor() {}

  getItems(): Observable<MediaItem[]> {
    const items = of(ITEMS);
    return items;
  }

  add(mediaItem: MediaItem) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem: MediaItem) {
    const index = this.mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this.mediaItems.splice(index, 1);
    }
  }
}
