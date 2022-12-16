import { NgModule } from '@angular/core';
import { ThemeRoutingModule } from './theme-routing.module';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { SharedModule } from '../shared/shared.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailComponent } from './theme-details/theme-details.component';
import { MainComponent } from './main/main.component';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ThemeListComponent,
    NewThemeComponent,
    ThemeDetailComponent,
    MainComponent,
    RecentPostComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ThemeListComponent
  ]
})
export class ThemesModule { }