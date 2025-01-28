import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-doubnutchart',
  templateUrl: './doubnutchart.component.html',
  styleUrls: ['./doubnutchart.component.scss'],
})
export class DoubnutchartComponent {
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
  };
  public doughnutChartLabels: string[] = ['Red', 'Green', 'Yellow'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
}
