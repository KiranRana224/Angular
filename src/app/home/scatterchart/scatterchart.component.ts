import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-scatterchart',
  templateUrl: './scatterchart.component.html',
  styleUrls: ['./scatterchart.component.scss'],
})
export class ScatterchartComponent {
  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };
  public scatterChartData: ChartData<'scatter'> = {
    datasets: [
      {
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 25 },
          { x: 20, y: 30 },
        ],
        label: 'Series A',
        borderColor: '#42A5F5',
        backgroundColor: '#42A5F5',
      },
    ],
  };
}
