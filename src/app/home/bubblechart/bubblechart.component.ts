import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.scss'],
})
export class BubblechartComponent {
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
  };
  public bubbleChartData: ChartData<'bubble'> = {
    datasets: [
      {
        data: [
          { x: 10, y: 20, r: 10 },
          { x: 15, y: 25, r: 15 },
          { x: 20, y: 30, r: 20 },
        ],
        label: 'Series A',
        backgroundColor: '#42A5F5',
      },
    ],
  };
}
