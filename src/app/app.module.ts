import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { BarRatingModule } from "ngx-bar-rating";

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './components/error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ErrorComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    BarRatingModule,
    FormsModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    NgbModule
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
