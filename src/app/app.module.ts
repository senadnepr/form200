import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XcCreateDialogComponent } from './xc-create-dialog/xc-create-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { HttpClientModule } from '@angular/common/http';
import { XcF200TableComponent } from './xc-f200-table/xc-f200-table.component';

@NgModule({
  declarations: [
    AppComponent,
    XcCreateDialogComponent,
    XcF200TableComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatMomentDateModule,
    HttpClientModule
  ],
  entryComponents: [
    XcCreateDialogComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
