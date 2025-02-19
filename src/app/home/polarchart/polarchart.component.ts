import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-polarchart',
  templateUrl: './polarchart.component.html',
  styleUrls: ['./polarchart.component.scss'],
})
export class PolarchartComponent {
  public polarAreaChartOptions: ChartOptions = {
    responsive: true,
  };
  public polarAreaChartLabels: string[] = [
    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Purple',
    'Orange',
  ];
  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: this.polarAreaChartLabels,
    datasets: [
      {
        data: [11, 16, 7, 3, 14, 10],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#66BB6A',
          '#FF6F61',
          '#FF8C42',
        ],
      },
    ],
  };
}
