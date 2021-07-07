import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import {HopitaleComponent} from './components/pages/hopitale/hopitale.component';
import {RadiologueComponent} from './components/pages/radiologue/radiologue.component';
import { MapComponent } from './components/common/map/map.component';
import { StockComponent } from './app/components/pages/stock/stock.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'patient', component: TeamComponent},
    {path: 'agenda', component: GalleryComponent}, 
   
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'addPatient', component: PrivacyPolicyComponent},
    {path: 'visite', component: TermsConditionsComponent},
    
    {path: 'error', component: ErrorComponent},
    {path: 'services-details', component: ServicesComponent},
    {path: 'patient-details', component: ServicesDetailsComponent},
    {path: 'clinique', component: BlogComponent},
   
    {path: 'contact', component: ContactComponent},
    {path: 'hopitale', component: HopitaleComponent},
    {path: 'radiologue', component: RadiologueComponent},
    {path: 'map', component: MapComponent},


    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'rendez-vous/:id', component: BlogDetailsComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'medecin', component: TestimonialsComponent},
    {path: 'stock', component: StockComponent},

    {path: '**', component: ErrorComponent} // This line will remain down from the whole component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
