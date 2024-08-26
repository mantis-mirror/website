import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../state/auth.service';

export const loggedInGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const service = inject(AuthService);

  if (service.i()) {
    return true;
  }

  const response = prompt('Please enter the passcode')

  if (response && response.toLowerCase() === 'mm2024') {
    service.i.set(true);
  }

  return true;
}
