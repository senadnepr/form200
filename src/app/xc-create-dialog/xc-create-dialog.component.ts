import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
// @ts-ignore
import {default as _rollupMoment, Moment} from 'moment';
import {XcF200TableComponent} from '../xc-f200-table/xc-f200-table.component';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-xc-create-dialog',
  templateUrl: './xc-create-dialog.component.html',
  styleUrls: ['./xc-create-dialog.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class XcCreateDialogComponent {
  date = new FormControl(moment());
  minDate: Date;
  maxDate: Date;

  constructor(public dialogRef: MatDialogRef<XcCreateDialogComponent>,
              public dialog: MatDialog) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    this.minDate = new Date(currentYear - 10, 0);
    this.maxDate = new Date(currentYear, currentMonth, 30);
  }
  // tslint:disable-next-line:typedef
  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }
  // tslint:disable-next-line:typedef
  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
  // tslint:disable-next-line:typedef
  onNoClick() {
    this.dialogRef.close();
  }
  openTable(dateString: string): void {
    const dialogRef = this.dialog.open(XcF200TableComponent, {
      width: '90%',
      height: 'auto',
    });
    console.log('Table');
    dialogRef.componentInstance.dateString = dateString;
  }
  // tslint:disable-next-line:typedef
  onCreateClick() {
    const dateString = moment(this.date.value).format('YYYYMM');
    this.openTable(dateString);
    console.log('Date is mine : ' + dateString);
    this.dialogRef.close();
  }
}
