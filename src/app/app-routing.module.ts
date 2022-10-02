import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsComponent } from './components/abouts/abouts.component';
import { AnglicanComponent } from './components/anglican/anglican.component';
import { BeitajabComponent } from './components/beitajab/beitajab.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomesComponent } from './components/homes/homes.component';
import { JozaniComponent } from './components/jozani/jozani.component';
import { KizimkaziComponent } from './components/kizimkazi/kizimkazi.component';
import { LangokuuComponent } from './components/langokuu/langokuu.component';
import { LivingstoneComponent } from './components/livingstone/livingstone.component';
import { MangapwaniComponent } from './components/mangapwani/mangapwani.component';
import { MaruhubiComponent } from './components/maruhubi/maruhubi.component';
import { MenusComponent } from './components/menus/menus.component';
import { NgomekongweComponent } from './components/ngomekongwe/ngomekongwe.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentviewComponent } from './components/paymentview/paymentview.component';
import { PhomeComponent } from './components/phome/phome.component';
import { PrisonComponent } from './components/prison/prison.component';



const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch: 'full'
    },
    {path:'menus',
    component: MenusComponent},
    {path:'abouts',
    component: AboutsComponent},
    {path:'home',
    component: HomesComponent},
    {path:'beitilajabu',
    component: BeitajabComponent},
    {path:"maruhubi",
    component: MaruhubiComponent},
    {path:"jozani",
    component: JozaniComponent},
    {path:'payment',
    component: PaymentComponent},
     {path:"homepemba",
    component: PhomeComponent},
     {path:"mangapwani",
    component: MangapwaniComponent},
    {path:"livingstone",
    component: LivingstoneComponent},
     {path:"anglican",
    component: AnglicanComponent},
     {path:"kizimkazi",
    component: KizimkaziComponent},
    {path:'contacts',
    component: ContactsComponent},
    {path:"ngome",
    component: NgomekongweComponent},
    {path:"prison",
    component: PrisonComponent},
    {path:"viewpay",
    component: PaymentviewComponent},
    {path:"langokuu",
    component: LangokuuComponent}
    
    
    
   
    
   
   
    // {path:"view/:id",
    // component: ViewReportComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
