import {Routes} from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./log-in-page/log-in-page.component' )
  }
] as Routes
