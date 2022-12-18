import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponent implements OnInit {

  isAuthenticating = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: () => {
        this.isAuthenticating = false;
      },
      error: () => {
        this.isAuthenticating = false;
      }
    })
  }

}