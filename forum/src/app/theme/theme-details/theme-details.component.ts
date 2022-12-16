import { Component } from '@angular/core';
import { ActivatedRoute , Route} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IPost, ITheme } from 'src/app/interfaces';
import { ThemeService } from '../theme.service';
import { NgForm } from '@angular/forms';
// import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss']
})
export class ThemeDetailComponent  {

  // constructor(private activatedRoute: ActivatedRoute) {
  //   console.log(this.activatedRoute.snapshot.data?.['theme']);
  // }
  themeID : number =  this.activatedRoute.snapshot.data?.['theme']._id ;
  theme: ITheme | null = null;
  errorFetcingData = false;
  postList: IPost[] | null = null;
 


  constructor( 
    // private authService: AuthService,
    private apiService: ApiService,
    private themeService:ThemeService,
    private activatedRoute: ActivatedRoute) { }

    newPostHandler(form: NgForm): void {
      if (form.invalid) { return; }
      const {  postText } = form.value;
  
      this.themeService.newPost(this.themeID,postText)
        .subscribe(() => {
          // this.router.navigate(['/theme/recent'])
        })
    }

  ngOnInit(): void {
    this.apiService.loadTheme(this.themeID).subscribe({
      // if(this.authServie.user!=null)
      next: (value) => {
        this.theme = value;

      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });

    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.postList = value;

      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });


  }


}