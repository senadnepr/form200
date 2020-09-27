import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {XcServiceService} from '../xc-service.service';
import {XcFile} from '../xcFile';

@Component({
  selector: 'app-xc-f200-table',
  templateUrl: './xc-f200-table.component.html',
  styleUrls: ['./xc-f200-table.component.scss']
})
export class XcF200TableComponent implements OnInit {
  dateString: string;
  xcFiles: XcFile[] = [];

  constructor(public dialogRef: MatDialogRef<XcF200TableComponent>,
              public service: XcServiceService,
  ) { }

  ngOnInit(): void {

    // const f200json = this.service.getf200json(this.dateString).subscribe(value => {
    //     console.log('Value ' + value.toString());
    //   },
    //   error => {
    //     console.log('Error ' + error.toString());
    //   });
    this.service.getf200json(this.dateString).subscribe(data => this.xcFiles = data.xcfiles );
    console.log('data ' + this.xcFiles.toLocaleString());
  }
  // tslint:disable-next-line:typedef
  close() {
    this.dialogRef.close();
  }
  // tslint:disable-next-line:typedef
  getExcellfile() {
    console.log('get xls');
  }
}
