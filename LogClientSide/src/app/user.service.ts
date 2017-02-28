import { Injectable } from '@angular/core';


export interface IUserService{
    Username : string;
    Language : string;
}

@Injectable()
export class UserService implements IUserService{
     public Username : string;
     public Language : string;
}