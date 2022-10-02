import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
// import { ViewReportComponent } from './view-report/view-report.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
// import { AdminCreateMadrasatComponent } from './admin-create-madrasat/admin-create-madrasat.component';
// import { AdminViewAllMadrasaComponent } from './admin-view-all-madrasa/admin-view-all-madrasa.component';
// import { AdminUpdateMadrasaComponent } from './admin-update-madrasa/admin-update-madrasa.component';
import { LoginComponent } from './login/login.component';
import { LoganComponent } from './logan/logan.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomesComponent } from './components/homes/homes.component';
import { MenusComponent } from './components/menus/menus.component';
import { AboutsComponent } from './components/abouts/abouts.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FotersComponent } from './components/foters/foters.component';
import { BeitajabComponent } from './components/beitajab/beitajab.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PaymentComponent } from './components/payment/payment.component';
import { MaruhubiComponent } from './components/maruhubi/maruhubi.component';
import { JozaniComponent } from './components/jozani/jozani.component';
import { MangapwaniComponent } from './components/mangapwani/mangapwani.component';
import { LivingstoneComponent } from './components/livingstone/livingstone.component';
import { AnglicanComponent } from './components/anglican/anglican.component';
import { KizimkaziComponent } from './components/kizimkazi/kizimkazi.component';
import { PrisonComponent } from './components/prison/prison.component';
import { PhomeComponent } from './components/phome/phome.component';
import { LangokuuComponent } from './components/langokuu/langokuu.component';
import { NgomekongweComponent } from './components/ngomekongwe/ngomekongwe.component';
import { PaymentviewComponent } from './components/paymentview/paymentview.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PaymentsService } from './servicepay/payments.service';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    // ViewReportComponent,
    AdminDashboardComponent,
    // AdminCreateMadrasatComponent,
    // AdminViewAllMadrasaComponent,
    // AdminUpdateMadrasaComponent,
    LoginComponent,
    LoganComponent,
    NavbarComponent,
    HomesComponent,
    MenusComponent,
    AboutsComponent,
    ContactsComponent,
    FotersComponent,
    BeitajabComponent,
    PaymentComponent,
    MaruhubiComponent,
    JozaniComponent,
    MangapwaniComponent,
    LivingstoneComponent,
    AnglicanComponent,
    KizimkaziComponent,
    PrisonComponent,
    PhomeComponent,
    LangokuuComponent,
    NgomekongweComponent,
    PaymentviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  providers: [PaymentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
