import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmAdminComponent } from './ahm-admin.component';

describe('AhmAdminComponent', () => {
  let component: AhmAdminComponent;
  let fixture: ComponentFixture<AhmAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhmAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhmAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
