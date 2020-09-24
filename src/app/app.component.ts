import { Component } from '@angular/core';

import {XcCreateDialogComponent} from './xc-create-dialog/xc-create-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form200';

  constructor(public dialog: MatDialog) {
    console.log('The constructor was open');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(XcCreateDialogComponent, {
      width: '250px',
      height: '300px'
    });
    console.log('The dialog was open');
  }
}
