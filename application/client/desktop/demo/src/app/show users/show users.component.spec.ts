import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show usersComponent } from './show users.component';

describe('Show usersComponent', () => {
  let component: Show usersComponent;
  let fixture: ComponentFixture<Show usersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show usersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Show usersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});