import { Component, Input } from '@angular/core';
import { CompanyModel } from '../../company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  @Input() company!: CompanyModel;
  @Input() index!: number;
}
