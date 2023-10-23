import { Injectable, OnInit } from "@angular/core";
import { CompanyModel } from "./company.model";
import history from "../../assets/history.json";

@Injectable()
export class CareerService{
    private companyList: CompanyModel[] = [];

    constructor() {
         history.forEach(data => {
            this.companyList.push(new CompanyModel(data.company, 
                data.position, 
                data.startDate, 
                data.endDate,
                'This is what my position was about.', 
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