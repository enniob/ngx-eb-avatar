import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEbAvatarComponent } from './ngx-eb-avatar.component';

describe('NgxEbAvatarComponent', () => {
  let component: NgxEbAvatarComponent;
  let fixture: ComponentFixture<NgxEbAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEbAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEbAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
