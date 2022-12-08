import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';





@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMsgComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    LoaderComponent,
    WelcomeMsgComponent
  ]
})
export class SharedModule { }
