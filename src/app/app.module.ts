import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SideNavComponent } from './side-nav.component';
import { PageNotFoundComponent } from './not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { CargaModule } from './carga/carga.module';

import { UsersService } from './users/users.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    UsersModule,
    CargaModule,
    AppRoutingModule,

  ],
  declarations: [ 
    AppComponent,
    SideNavComponent,
    PageNotFoundComponent, 
  ],
  providers: [
    UsersService, AuthGuard,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
