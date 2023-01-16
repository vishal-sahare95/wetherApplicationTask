export interface search{
    name:string;
    days:number
    aqi:string
}
export class searchC{
    name:string;
    days:number;
    aqi:string
    constructor(obj?:search){
        this.name=obj && obj.name || '';
        this.days=obj && obj.days || 0;
        this.aqi=obj && obj.aqi || '';
    }
}