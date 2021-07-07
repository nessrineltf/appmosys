import { Routes, RouterModule } from '@angular/router';
import {VillesModule} from '../../villes/villes.module';
import {MedecinsModule} from '../../medecins/medecins.module';
import {PharmaciesModule} from '../../pharmacies/pharmacies.module';
import {ParaPharmaciesModule} from '../../para-pharmacies/para-pharmacies.module';
import {HopitalesModule} from '../../hopitales/hopitales.module';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'page',
    loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
  },
  {
    path: 'villes',
    loadChildren: () => import('../../villes/villes.module').then(m => m.VillesModule)
  },
  {
    path: 'specialite',
    loadChildren: () => import('../../specialite/specialite.module').then(m => m.SpecialiteModule)
  },
 {
  path: 'medecins',
  loadChildren: () => import('../../medecins/medecins.module').then(m => m.MedecinsModule)
  },
  {
    path: 'pharmacies',
    loadChildren: () => import('../../pharmacies/pharmacies.module').then(m => m.PharmaciesModule)
  },
  {
    path: 'para_pharmacies',
    loadChildren: () => import('../../para-pharmacies/para-pharmacies.module').then(m => m.ParaPharmaciesModule)
  },
  {
    path: 'hopitales',
    loadChildren: () => import('../../hopitales/hopitales.module').then(m => m.HopitalesModule)
  },
  {
    path: 'cliniques',
    loadChildren: () => import('../../cliniques/cliniques.module').then(m => m.CliniquesModule)
  },
  {
    path: 'laboratoires',
    loadChildren: () => import('../../labos/labos.module').then(m => m.LabosModule)
  },
  {
    path: 'radiologues',
    loadChildren: () => import('../../radio/radio.module').then(m => m.RadioModule)
  },
];
