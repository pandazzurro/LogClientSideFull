import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public Sesso: string;
  constructor(public UserService : UserService) {
    UserService.SexType = true;
    UserService.Username = "Andrea";
    this.Sesso = "maschio";
   }

  ngOnInit() {
  }
  
  public changeSexType(){
    this.UserService.SexType = !this.UserService.SexType;
    if(this.UserService.SexType)
      this.Sesso = "maschio";
    else
      this.Sesso = "femmina";
  }
}
