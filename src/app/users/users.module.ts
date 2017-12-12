import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserListComponent } from './user-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        AppRoutingModule,
    ],
    declarations: [
        UserListComponent,
    ],
})

export class UsersModule {}