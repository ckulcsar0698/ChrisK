import { Component, Input, OnInit } from '@angular/core';
import { CompanyModel } from '../company.model';
import { CareerService } from '../career.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  @Input() company!: CompanyModel;
  @Input() id!: number;

  constructor(private careerService: CareerService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.company = this.careerService.getCompay(this.id);
      }
    );
  }
}
