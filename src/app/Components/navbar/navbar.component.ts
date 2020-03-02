import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { 
    auth.handleRedirectCallback$;
  }

  ngOnInit() {
  }

  login(){
    this.auth.login();
  }

  salir(){
    this.auth.logout();
  }
}
