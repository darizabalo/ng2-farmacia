import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './users/user-list.component';
import { CargaComponent } from './carga/carga.component';
import { PageNotFoundComponent }    from './not-found.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    { path: 'users',  component: UserListComponent },
    { path: 'carga', component: CargaComponent, canActivate: [AuthGuard] },
    { path: '',   redirectTo: '/users', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],    
})

export class AppRoutingModule {}