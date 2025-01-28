import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterchartComponent } from './scatterchart.component';

describe('ScatterchartComponent', () => {
  let component: ScatterchartComponent;
  let fixture: ComponentFixture<ScatterchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScatterchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
