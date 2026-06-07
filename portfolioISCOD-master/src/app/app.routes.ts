import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RealisationsComponent } from './realisations/realisations.component'
import { FormationComponent } from './formation/formation.component'
import { CompetencesComponent } from './competences/competences.component'
import { CompetenceDetailComponent } from './competences/competence-detail/competence-detail.component'
import { RealisationDetailComponent } from './realisations/realisation-detail/realisation-detail.component'
import { ParcoursComponent } from './parcours/parcours.component'
import { ParcoursDetailComponent } from './parcours/parcours-detail/parcours-detail.component'
import { ContactComponent } from './contact/contact.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'about', component: AboutComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'parcours/:slug', component: ParcoursDetailComponent },
  { path: 'real', component: RealisationsComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'comp', component: CompetencesComponent },
  { path: 'comp/:slug', component: CompetenceDetailComponent },

  { path: 'real/:slug', component: RealisationDetailComponent },

]
