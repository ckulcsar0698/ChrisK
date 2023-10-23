import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bullet-point',
  templateUrl: './bullet-point.component.html',
  styleUrls: ['./bullet-point.component.css']
})
export class BulletPointComponent {
  @Input() bullet!: string;
}
