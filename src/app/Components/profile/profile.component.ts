import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile$) {
      this.profile = this.auth.userProfile$;
      console.log(this.profile);
    }else{
      this.auth.getUser$((err, profile) =>{
        this.profile = profile;
        console.log(this.profile);
      });
    }
  }

  

}
