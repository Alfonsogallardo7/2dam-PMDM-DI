import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { PersonItemComponent } from './components/person-item/person-item.component';
import { PersonPopularListComponent } from './components/person-popular-list/person-popular-list.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DialogMovieDetailComponent } from './components/dialog-movie-detail/dialog-movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponent,
    MovieItemComponent,
    PersonItemComponent,
    PersonPopularListComponent,
    SideMenuComponent,
    DialogMovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule
  ],

  entryComponents: [
    DialogMovieDetailComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
