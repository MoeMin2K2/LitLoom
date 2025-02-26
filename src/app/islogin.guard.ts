import { CanActivateFn } from '@angular/router';
import { FormService } from './form.service';
import { inject } from '@angular/core';
import { NavController } from '@ionic/angular';

export const isloginGuard: CanActivateFn = (route, state) => {
  const authService = inject(FormService);
  const router = inject(NavController);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigateForward(['/form']);
    return false;
  }
};
