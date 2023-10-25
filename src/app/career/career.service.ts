import { Injectable, OnInit } from "@angular/core";
import { CompanyModel } from "./company.model";
import siteData from "../../assets/history.json";

@Injectable()
export class CareerService{
    private companyList: CompanyModel[] = [];

    constructor() {
         siteData.career.companies.forEach(data => {
            this.companyList.push(new CompanyModel(
                data.company, 
                data.position, 
                data.startDate, 
                data.endDate,
                data.summary, 
                data.events))
        })
    }



    getCompanyList() {
        return this.companyList.slice();
    }

    getCompay(id: number) {
        return this.companyList[id];
    }
}