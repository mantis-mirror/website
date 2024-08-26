import { Routes } from '@angular/router';
import { RootComponent } from "./components/_root/root.component";
import { loggedInGuard } from "./guards/logged-in.guard";

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    canActivate: [ loggedInGuard ]
  }
];
