import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})


export class NewThemeComponent {

  constructor( private authService:AuthService,
    private themeService: ThemeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn) {  // if not loged redirect
      this.router.navigate(['/auth/login']);
    }
   

  }
  
  newThemeHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { themeName, postText } = form.value;

    this.themeService.createTheme(themeName, postText)
      .subscribe(() => {
        this.router.navigate(['/theme/recent'])
      })
  }
}