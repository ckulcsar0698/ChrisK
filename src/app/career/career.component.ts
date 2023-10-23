import { Component } from '@angular/core';
import { CareerService } from './career.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
  providers: [CareerService]
})
export class CareerComponent {

}
