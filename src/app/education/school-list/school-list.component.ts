import { Component, OnInit } from '@angular/core';
import { SchoolModel } from '../school.model';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schoolList: SchoolModel[] = [];

  constructor(private educationService: EducationService){}


  ngOnInit(): void {
    this.schoolList = this.educationService.getSchoolList();
  }


}
