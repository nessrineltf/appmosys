import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { WavesModule, InputsModule, ButtonsModule, ChartsModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import { HopitaleComponent } from './components/pages/hopitale/hopitale.component';
import { RadiologueComponent } from './components/pages/radiologue/radiologue.component';
import { MapComponent } from './components/common/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarModule } from 'ng-sidebar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import { DialogAddPatientComponent } from './components/pages/dialog-add-patient/dialog-add-patient.component';
import { FilterPipe } from './filter.pipe';
import { StockComponent } from './app/components/pages/stock/stock.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    PreloaderComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    TeamComponent,
    TestimonialsComponent,
    GalleryComponent,
    FaqComponent,
    SignInComponent,
    SignUpComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ComingSoonComponent,
    ErrorComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    BlogDetailsComponent,
    BlogComponent,
    ContactComponent,
    HopitaleComponent,
    RadiologueComponent,
    MapComponent,
    DialogAddPatientComponent,
    FilterPipe,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      WavesModule,
      InputsModule,
      ButtonsModule,
      HttpClientModule,
      FormsModule,
      CommonModule, 
     ReactiveFormsModule,
     MatToolbarModule,
     MatSidenavModule,
     MatListModule,
     MatIconModule,
     MatButtonModule,
     FlexLayoutModule,
     MatMenuModule,
     MatDialogModule,
     MatInputModule,
     MatSelectModule,
     MatFormFieldModule,
     BrowserAnimationsModule,
     SidebarModule.forRoot(),
     ChartsModule,
     MDBBootstrapModule.forRoot(),
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyApGrNV338XybNHjD00kOuDoI865WGVNME'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
