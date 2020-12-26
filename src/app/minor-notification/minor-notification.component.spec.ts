import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorNotificationComponent } from './minor-notification.component';

describe('MinorNotificationComponent', () => {
  let component: MinorNotificationComponent;
  let fixture: ComponentFixture<MinorNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
