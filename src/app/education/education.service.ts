import { Injectable } from "@angular/core";
import { SchoolModel } from "./school.model";
import siteData from "../../assets/history.json";

@Injectable()
export class EducationService{
    schoolList: SchoolModel[] = [];

    constructor(){
        siteData.education.schools.forEach(data =>{
            this.schoolList.push( new SchoolModel(
                data.school,
                data.degree,
                data.gradYear,
                data.gpa))
        })
    }

    getSchoolList(){
        return this.schoolList.slice();
    }
}