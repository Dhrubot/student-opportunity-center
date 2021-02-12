import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { environment } from '../environments/environment'
import { MaterialModule } from './material/material.module'


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserService } from './shared/user.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailsComponent } from './users/user/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
