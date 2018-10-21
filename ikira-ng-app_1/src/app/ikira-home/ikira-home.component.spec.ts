import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IkiraHomeComponent } from './ikira-home.component';

describe('IkiraHomeComponent', () => {
  let component: IkiraHomeComponent;
  let fixture: ComponentFixture<IkiraHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IkiraHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IkiraHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
