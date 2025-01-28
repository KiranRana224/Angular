import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
  ];
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        label: 'Series A',
        backgroundColor: '#42A5F5',
      },
      {
        data: [28, 48, 40, 19, 86],
        label: 'Series B',
        backgroundColor: '#66BB6A',
      },
    ],
  };
}
