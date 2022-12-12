import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { AppEmailDirective } from './validate/app-email.directive';





@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMsgComponent,
    AppEmailDirective,
    ShortenPipe,
    ElapsedTimePipe
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    LoaderComponent,
    WelcomeMsgComponent,
    AppEmailDirective,
    ShortenPipe,
    ElapsedTimePipe
  ]
})
export class SharedModule { }
