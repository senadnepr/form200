import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XcCreateDialogComponent } from './xc-create-dialog/xc-create-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    XcCreateDialogComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    XcCreateDialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
