import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { MatCardModule } from '@angular/material/card';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const lookupLists = {
  mediums: ['Movies', 'Series'],
};
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeroesComponent,
    ContactFormComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: 'lookupListToken', useValue: lookupLists }],
  bootstrap: [AppComponent],
})
export class AppModule {}
