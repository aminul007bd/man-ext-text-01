import { MediaItemService } from './../services/media-item.service';
import { Component, OnInit } from '@angular/core';
import { MediaItem } from '../interface/media-list-item';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit {
  mediaItems: MediaItem[] = [];
  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.mediaItemService
      .getItems()
      .subscribe((mediaItems) => (this.mediaItems = mediaItems));
  }
}
