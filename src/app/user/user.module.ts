import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersListsComponent } from './users-lists/users-lists.component';
import { MaterialModule } from 'material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersListsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [UsersListsComponent],
})
export class UserModule {}
