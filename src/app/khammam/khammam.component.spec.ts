import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhammamComponent } from './khammam.component';

describe('KhammamComponent', () => {
  let component: KhammamComponent;
  let fixture: ComponentFixture<KhammamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhammamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhammamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
