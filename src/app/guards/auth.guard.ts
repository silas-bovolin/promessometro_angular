import { CanActivateFn, Router } from '@angular/router';
import { PermissaoService } from '../services/permissao/permissao.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(PermissaoService).estalogado()) {
    return true;
  }
  else {
    inject(Router).navigate(['/']);
    return false;
  }
};
