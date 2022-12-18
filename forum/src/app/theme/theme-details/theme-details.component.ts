import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IPost, ITheme } from 'src/app/interfaces';
import { ThemeService } from '../theme.service';
import { AuthService } from 'src/app/auth/auth.service';
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

  // form = this.formB.group({
  //   postText: ['', [Validators.required, Validators.minLength(5)]],
    
  // });



  constructor(
   private router:Router,
    private authService: AuthService,
    private apiService: ApiService,
    private themeService:ThemeService,
    private activatedRoute: ActivatedRoute
    ) { }

    refreshTheme(){
      this.apiService.loadTheme(this.themeID).subscribe({
        // if(this.authServie.user!=null)
        next: (value) => {
          this.theme = value;
          this.postList = value.posts ;

        },
        error: (err) => {
          this.errorFetcingData = true;
          console.error(err);
        }
      });
    }

    newPostHandler(form: NgForm): void {
      if (form.invalid) { return; }
      let {  postText } = form.value;
      // let currentUrl = this.router.url;
      this.themeService.newPost(this.themeID,postText)
        .subscribe((newTheme) => {
          // next: () => {
            this.theme = newTheme;
            postText='';
            form.reset();
            this.refreshTheme();
            // this.router.navigate(['/theme/detail/'+newTheme._id]);
          // }
          // this.router.navigate([currentUrl]);
          // this.router.navigate(['/theme/detail/'+this.themeID]);
          
        })
      
        
    }
    

    newLikeHandler(event: Event,post: IPost): void {
      // const myLike= post.likes.findIndex(e => e === this.theme?.userId._id);
      // if(myLike!=-1){
      //   return;  // my user is already liked post
      // }
      let myUser:string = localStorage.getItem('user_ID') || '';
      let myLike= post.likes.findIndex(e => e === myUser);
      if(post.userId._id === myUser || myLike!=-1 ){return} // my user cannot like himself or double likes
      this.themeService.newPostLike(post._id)
        .subscribe(() => {
          this.refreshTheme();
          //  this.router.navigate(['ThemeDetailComponent']);
        })
    }
    removeLikeHandler(event: Event,post: IPost): void {
      if(post.likes!=null && post.likes.length==0){return}
      let myUser:string = localStorage.getItem('user_ID') || '';
      let myLike= post.likes.findIndex(e => e === myUser);
      if( myLike ==-1){
        return; // my user is not like post
      }
      
      // post.likes = post.likes.filter(item => item !== this.theme?.userId._id); // remove my user from  Array of likes
      post.likes = post.likes.filter(item => item !== myUser);
      this.themeService.newPostLike(post._id)
        .subscribe(() => {
          this.refreshTheme();
          //  this.router.navigate(['ThemeDetailComponent']);
        })
    }


  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    if (!this.authService.isLoggedIn) {  // if not loged redirect
     this.router.navigate(['/auth/login']);
    }
    this.apiService.loadTheme(this.themeID).subscribe({
      // if(this.authServie.user!=null)
      next: (value) => {
        this.theme = value;
        this.postList = value.posts ;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });

    // this.apiService.loadPosts(5).subscribe({
    //   next: (value) => {
    //     this.postList = value;

    //   },
    //   error: (err) => {
    //     this.errorFetcingData = true;
    //     console.error(err);
    //   }
    // });


  }


}