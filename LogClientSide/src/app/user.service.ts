import { Injectable } from '@angular/core';


export interface IUserService{
    Username : string;
    SexType : boolean;
}

@Injectable()
export class UserService implements IUserService{
     public Username : string;
     public SexType : boolean;
}