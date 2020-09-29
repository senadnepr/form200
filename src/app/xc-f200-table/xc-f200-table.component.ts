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
  // xcFiles: XcFile[] = [];
  public xcFiles: XcFile[] = [];

  constructor(public dialogRef: MatDialogRef<XcF200TableComponent>,
              public service: XcServiceService,
  ) { }

  ngOnInit(): void {

    const f200json = this.service.getf200json(this.dateString).subscribe(value => {
        this.xcFiles = value;
        // tslint:disable-next-line:only-arrow-functions
        this.xcFiles.forEach(function( xc){
          console.log('xcFile ' + xc.ref_file);
        }
      );
      },
      error => {
        console.log('Error ' + error.toString());
      });
    // this.service.getf200json(this.dateString).subscribe((data: XcFile[]) => {this.xcFiles = data; });
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
