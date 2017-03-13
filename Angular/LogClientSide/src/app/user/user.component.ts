import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(public UserService : UserService) {
    UserService.Language = "Italiano";
    UserService.Username = "Andrea";
   }

  ngOnInit() {
  }
  
  public changeLanguage(){
    if(this.UserService.Language == "Italiano")
      this.UserService.Language = "Inglese";
    else
      this.UserService.Language = "Italiano";
  }
}
