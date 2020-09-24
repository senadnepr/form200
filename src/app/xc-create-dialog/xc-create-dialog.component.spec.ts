import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XcCreateDialogComponent } from './xc-create-dialog.component';

describe('XcCreateDialogComponent', () => {
  let component: XcCreateDialogComponent;
  let fixture: ComponentFixture<XcCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XcCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XcCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
