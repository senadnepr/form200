import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatLabel} from '@angular/material/form-field';
import {MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-xc-create-dialog',
  templateUrl: './xc-create-dialog.component.html',
  styleUrls: ['./xc-create-dialog.component.scss']
})
export class XcCreateDialogComponent {

  constructor(public dialogRef: MatDialogRef<XcCreateDialogComponent>) { }
  // tslint:disable-next-line:typedef
  onNoClick() {
    this.dialogRef.close();
  }
}
