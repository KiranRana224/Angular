import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.scss'],
})
export class RadarchartComponent {
  public radarChartOptions: ChartOptions = {
    responsive: true,
  };
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];
  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      {
        data: [65, 59, 90, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        borderColor: '#42A5F5',
      },
    ],
  };
}
