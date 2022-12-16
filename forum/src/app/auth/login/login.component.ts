import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { appEmailDomains } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  appEmailDomains = appEmailDomains;

  @ViewChild(
    // 'form',
    NgForm,
    { static: true }
  ) form!: ElementRef<HTMLInputElement>;
  // @ViewChild('files', { static: true }) files!: ElementRef<HTMLInputElement>;

  constructor(private activatedRoute: ActivatedRoute,
     private router: Router,        //inject angular router into component
      private authService: AuthService
      ) {

  }
  errorFetcingData=false;
  

  loginHandler(form: NgForm): void {
    // console.log(this.files.nativeElement.files);
    if (form.invalid) { return; }
    const { email, password } = form.value;
    this.authService.login(email!, password!)
    .pipe(catchError((err) => {
      this.errorFetcingData=true;
        return throwError(() => err);
      })
    )
      .subscribe(user => {
        if( this.errorFetcingData){return}
        // if(this.authService.errorFetchData){this.errorFetcingData=true;}
        this.router.navigate(['/theme/recent']);
      });

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}