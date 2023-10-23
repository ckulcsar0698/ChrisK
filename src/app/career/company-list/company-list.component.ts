import { Component, OnInit } from '@angular/core';
import { CompanyModel } from '../company.model';
import { CareerService } from '../career.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companyList!: CompanyModel[];

  constructor(private careerService: CareerService) {}

  ngOnInit(): void {
    this.companyList = this.careerService.getCompanyList();
  }
}
