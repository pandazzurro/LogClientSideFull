export class PaginationData<T>{
    totalItems: number;
    data : T[];
        
    constructor(data : T[], totalItems : number) {
        this.data = data;
        this.totalItems = totalItems;
    }
}