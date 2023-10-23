export class CompanyModel{
    constructor(public name: string, 
                public position: string, 
                public startDate: string,
                public endDate: string,
                public summary: string,
                public bulletPoints: string[]){}
}