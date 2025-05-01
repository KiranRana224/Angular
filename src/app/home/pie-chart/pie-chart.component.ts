import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  // datasets: ChartData<'pie'>[] = [
  //   {
  //     labels: ['Apples', 'Bananas', 'Cherries'],
  //     datasets: [
  //       { data: [10, 20, 30], backgroundColor: ['red', 'yellow', 'pink'] },
  //     ],
  //   },
  //   {
  //     labels: ['Dogs', 'Cats', 'Birds'],
  //     datasets: [
  //       { data: [25, 15, 60], backgroundColor: ['blue', 'gray', 'orange'] },
  //     ],
  //   },
  //   {
  //     labels: ['Chrome', 'Firefox', 'Edge'],
  //     datasets: [
  //       { data: [60, 30, 10], backgroundColor: ['green', 'purple', 'teal'] },
  //     ],
  //   },
  // ];

  // currentIndex = 0;

  // get pieChartData(): ChartData<'pie'> {
  //   return this.datasets[this.currentIndex];
  // }

  // pieChartOptions: ChartOptions<'pie'> = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'bottom',
  //     },
  //   },
  // };

  // next() {
  //   this.currentIndex = (this.currentIndex + 1) % this.datasets.length;
  // }

  // prev() {
  //   this.currentIndex =
  //     (this.currentIndex - 1 + this.datasets.length) % this.datasets.length;
  // }

  /*** */
  dataSets = [
    { data: [30, 70], label: 'Set 1', labels: ['A', 'B'] },
    { data: [50, 50], label: 'Set 2', labels: ['X', 'Y'] },
    { data: [20, 40, 40], label: 'Set 3', labels: ['Red', 'Green', 'Blue'] },
  ];

  currentIndex = 0;

  pieChartData: ChartData<'pie', number[], string> = {
    labels: this.dataSets[0].labels,
    datasets: [{ data: this.dataSets[0].data }],
  };

  nextData() {
    this.currentIndex = (this.currentIndex + 1) % this.dataSets.length;
    this.updateChart();
  }

  previousData() {
    this.currentIndex =
      (this.currentIndex - 1 + this.dataSets.length) % this.dataSets.length;
    this.updateChart();
  }

  updateChart() {
    const currentSet = this.dataSets[this.currentIndex];
    this.pieChartData = {
      labels: currentSet.labels,
      datasets: [{ data: currentSet.data }],
    };
  }
}
