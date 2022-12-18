import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.scss']
})
export class WelcomeMsgComponent {

  @Input() isLoggedIn = false;

  constructor(
    // private authService: AuthService, 
    private router: Router  //inject angular router into component
    ) { }

}