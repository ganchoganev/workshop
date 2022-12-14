import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { catchError, map, of, throwError } from 'rxjs';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validate';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.formB.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    ext: [''],
    tel: [''],
    pass: this.formB.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'rePassword')]
    })
  });

  constructor(private formB: FormBuilder,
     private authService: AuthService,
      private router: Router    //inject angular router into component
      ) { }

  registerHandler() {
    if (this.form.invalid) { return; } 
    const { username, email, pass: { password, rePassword } = {}, tel } = this.form.value;
    this.authService.register(username!, email!, password!, rePassword!, tel || undefined)
      .subscribe(user => {
        this.router.navigate(['/theme/recent']); // after success register redirect to inner page
      });
  }
}