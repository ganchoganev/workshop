
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { ThemeResolver } from "./resolve/theme.resolver";
import { ThemeDetailComponent } from "./theme-details/theme-details.component";

const routes: Routes = [
  {
    path: 'theme',
    children: [
      {
        path: 'recent',
        component: MainComponent
      },
      {
        path: 'new',
        component: NewThemeComponent
      },
      {
        path: 'detail/:id',
        resolve: {
          theme: ThemeResolver
        },
        component: ThemeDetailComponent
      }
    ]
  }
];

export const ThemeRoutingModule = RouterModule.forChild(routes);