import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubnutchartComponent } from './doubnutchart.component';

describe('DoubnutchartComponent', () => {
  let component: DoubnutchartComponent;
  let fixture: ComponentFixture<DoubnutchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubnutchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubnutchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
