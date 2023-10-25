import { Component, Input } from '@angular/core';
import { SchoolModel } from '../../school.model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
  @Input() school!: SchoolModel;
}
