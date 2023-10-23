import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyDetailsComponent } from './career/company-details/company-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'career', component: CareerComponent, children: [
    {path: ':id', component:CompanyDetailsComponent}
  ]},
  {path: 'about', component: AboutComponent},
  {path: 'education', component: EducationComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
