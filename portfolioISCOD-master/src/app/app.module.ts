import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GifTestComponent } from './gif-test/gif-test.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { CompetencesComponent } from './competences/competences.component';
import { FormationComponent } from './formation/formation.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { Title } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { SourceReferenceComponent } from './shared/source-reference/source-reference.component';


@NgModule({
  declarations: [
    HomePageComponent,
    
    
    GifTestComponent,
    FormationComponent,
    
    AboutComponent,
    SourceReferenceComponent
  ],
  imports: [
    BrowserModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
