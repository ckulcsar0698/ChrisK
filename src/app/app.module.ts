import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyListComponent } from './career/company-list/company-list.component';
import { CompanyComponent } from './career/company-list/company/company.component';
import { CompanyDetailsComponent } from './career/company-details/company-details.component';
import { BulletPointComponent } from './career/company-details/bullet-point/bullet-point.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CareerComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    PageNotFoundComponent,
    CompanyListComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    BulletPointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
