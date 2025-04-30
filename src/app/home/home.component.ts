import { Component } from '@angular/core';
import { ChartOptions, ChartData, ChartType, Chart } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
Chart.register(DataLabelsPlugin);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public lineChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'My First dataset',
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values',
        },
        ticks: {
          // beginAtZero: true
        },
      },
    },
  };

  public barChartType: ChartType = 'line';
  public lineChartType: ChartType = 'bar';
  public pieChartType: ChartType = 'pie';
  public doubnutChartType: ChartType = 'doughnut';

  public lineChartLegend = true;
  public lineChartPlugins = [];
  /****dynamic  */

  public currentChartType: ChartType = 'line';

  public pieChartData: ChartData<'pie'> = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My Pie Chart',
        data: [300, 500, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  get chartData(): ChartData {
    switch (this.currentChartType) {
      case 'pie':
      case 'doughnut':
        return this.pieChartData;
      default:
        return this.lineChartData;
    }
  }

  /** */
  public barChartData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Series A',
        data: [65, 59, 80, 81],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: 'Series B',
        data: [28, 48, 40, 19],
        backgroundColor: 'rgba(153,102,255,0.6)',
      },
    ],
  };
  /*** */

  public barChartTypes: ChartType = 'bar';

  public stackedBarChartData: ChartData<'bar'> = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Product A',
        data: [30, 40, 50, 60],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
      {
        label: 'Product B',
        data: [20, 30, 40, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
    ],
  };

  public stackedBarChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        title: { display: true, text: 'Quarter' },
      },
      y: {
        stacked: true,
        title: { display: true, text: 'Sales' },
      },
    },
  };
  /**mixed chart */
  public mixedChartType: ChartType = 'bar'; // base type is bar

  public mixedChartData: ChartData<'bar' | 'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        type: 'bar',
        label: 'Sales',
        data: [30, 50, 70, 60, 20, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        type: 'line',
        label: 'Trend',
        data: [20, 60, 60, 80, 89, 90.99],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.4,
        yAxisID: 'y',
      },
    ],
  };

  public mixedChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  public chartLegend = true;
  public chartPlugins = [];

  /**multi line  */

  public multiLineChartType: ChartType = 'line';

  public multiLineChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Product A',
        data: [65, 59, 80, 81, 56],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'transparent',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Product B',
        data: [28, 48, 40, 19, 86],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'transparent',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Product C',
        data: [35, 29, 60, 31, 76],
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  public multiLineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  public chartsLegend = true;
  public chartsPlugins = [];
  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  /**pie chart */
  public pieChartsType: ChartType = 'pie';

  public pieChartsData: ChartData<'pie'> = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Votes',
        data: [300, 500, 200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 10,
      },
    ],
  };

  public chartsOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      datalabels: {
        formatter: (value, context) => {
          const data = context.chart.data.datasets[0].data as number[];
          const total = data.reduce((acc, val) => acc + val, 0);
          const percent = ((value / total) * 100).toFixed(1) + '%';
          return percent;
        },
        color: '#fff',
        font: {
          weight: 'bold',
          size: 14,
        },
      },
    },
  };

  public chartsLegends = true;
  public chartsPluginss = [DataLabelsPlugin];
}
