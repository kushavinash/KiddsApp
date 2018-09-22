import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevideComponent } from './devide.component';

describe('DevideComponent', () => {
  let component: DevideComponent;
  let fixture: ComponentFixture<DevideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
