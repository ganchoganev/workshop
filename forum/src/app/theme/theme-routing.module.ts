
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { ThemeResolver } from "./resolve/theme.resolver";
import { ThemeDetailComponent } from "./theme-details/theme-details.component";
// import { AuthActivate } from "../shared/guard.auth.activate";

const routes: Routes = [
  {
    path: 'recent',
    component: MainComponent
    
  },
  {
    path: 'new',
    component: NewThemeComponent,
    data: {
      title: 'New Theme',
      loginRequired: true
    }
  },
  {
    path: 'detail/:id',
    resolve: {
      theme: ThemeResolver
    },
    component: ThemeDetailComponent,
    data: {
      title: 'Theme Details',
      loginRequired: true
    }
  }
];

export const ThemeRoutingModule = RouterModule.forChild(routes);