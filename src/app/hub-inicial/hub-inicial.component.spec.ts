import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubInicialComponent } from './hub-inicial.component';

describe('HubInicialComponent', () => {
  let component: HubInicialComponent;
  let fixture: ComponentFixture<HubInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HubInicialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
