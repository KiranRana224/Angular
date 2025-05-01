import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.scss'],
})
export class DynamicChartComponent {
  chartOptions: ChartConfiguration<'bar'>['options'] = { responsive: true };

  // 1. Drill-Down Graph (Jan–Jun)
  // drillLevel: 'summary' | 'detail' = 'summary';
  drillChartData!: ChartConfiguration<'bar'>['data'];

  janToJunLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  janToJunData = [10, 15, 20, 25, 30, 35];

  // 2. Paged Graph
  currentPage = 0;
  pageSize = 6;
  allMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  allData = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65];
  pagedChartData!: ChartConfiguration<'bar'>['data'];

  ngOnInit(): void {
    // this.initDrillSummary();
    this.updatePagedChart();
    this.loadMonthChart();
  }

  // Drill-down chart init (summary)
  // initDrillSummary() {
  //   this.drillLevel = 'summary';
  //   const total = this.janToJunData.reduce((a, b) => a + b, 0);

  //   this.drillChartData = {
  //     labels: ['Jan–Jun'],
  //     datasets: [
  //       {
  //         label: 'Summary (Jan–Jun)',
  //         data: [total],
  //         backgroundColor: '#4bc0c0',
  //       },
  //     ],
  //   };
  // }

  // onDrillChartClick(event: any) {
  //   if (this.drillLevel === 'summary' && event.active?.[0]?.index === 0) {
  //     this.drillLevel = 'detail';
  //     this.drillChartData = {
  //       labels: this.janToJunLabels,
  //       datasets: [
  //         {
  //           label: 'Detail: Jan–Jun',
  //           data: this.janToJunData,
  //           backgroundColor: '#36a2eb',
  //         },
  //       ],
  //     };
  //   }
  // }

  // onDrillBack() {
  //   this.initDrillSummary();
  // }

  // Paging chart logic
  updatePagedChart() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;

    this.pagedChartData = {
      labels: this.allMonths.slice(start, end),
      datasets: [
        {
          label: `Month Range: ${this.allMonths[start]}–${
            this.allMonths[Math.min(end - 1, this.allMonths.length - 1)]
          }`,
          data: this.allData.slice(start, end),
          backgroundColor: '#ff6384',
        },
      ],
    };
  }

  onPrev() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagedChart();
    }
  }

  onNext() {
    if ((this.currentPage + 1) * this.pageSize < this.allMonths.length) {
      this.currentPage++;
      this.updatePagedChart();
    }
  }

  drillLevel: 'month' | 'week' | 'day' = 'month';
  // drillChartData: ChartConfiguration<'bar'>['data'] | undefined;
  drillChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  // Sample data
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  monthData = [30, 40, 35, 50, 45, 60]; // Total values for each month

  weekDataPerMonth: any = {
    Jan: [8, 7, 10, 5],
    Feb: [12, 9, 10, 9],
    Mar: [9, 10, 8, 8],
    Apr: [15, 10, 15, 10],
    May: [11, 12, 11, 11],
    Jun: [20, 15, 15, 10],
  };

  dayDataPerWeek: any = {
    Week1: [1, 2, 2, 1, 1, 1, 0],
    Week2: [2, 2, 2, 1, 1, 1, 0],
    Week3: [3, 2, 2, 1, 1, 1, 0],
    Week4: [2, 3, 2, 1, 1, 1, 0],
  };

  selectedMonth = '';
  selectedWeek = '';

  // Load month-level chart
  loadMonthChart() {
    this.drillLevel = 'month';
    this.drillChartData = {
      labels: this.months,
      datasets: [
        {
          label: 'Monthly Overview',
          data: this.monthData,
          backgroundColor: '#4bc0c0',
        },
      ],
    };
  }

  // Load week chart for selected month
  loadWeekChart(month: string) {
    this.drillLevel = 'week';
    this.selectedMonth = month;

    this.drillChartData = {
      labels: ['Week1', 'Week2', 'Week3', 'Week4'],
      datasets: [
        {
          label: `Weekly Breakdown: ${month}`,
          data: this.weekDataPerMonth[month],
          backgroundColor: '#36a2eb',
        },
      ],
    };
  }

  // Load day chart for selected week
  loadDayChart(week: string) {
    this.drillLevel = 'day';
    this.selectedWeek = week;

    this.drillChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: `Daily Breakdown: ${this.selectedMonth} - ${week}`,
          data: this.dayDataPerWeek[week],
          backgroundColor: '#ff9f40',
        },
      ],
    };
  }

  // Handle drill click at each level
  onDrillChartClick(event: any) {
    const index = event.active?.[0]?.index;
    if (index === undefined) return;

    if (this.drillLevel === 'month') {
      const month = this.months[index];
      this.loadWeekChart(month);
    } else if (this.drillLevel === 'week') {
      const week = ['Week1', 'Week2', 'Week3', 'Week4'][index];
      this.loadDayChart(week);
    }
  }

  // Back button logic
  onDrillBack() {
    if (this.drillLevel === 'day') {
      this.loadWeekChart(this.selectedMonth);
    } else if (this.drillLevel === 'week') {
      this.loadMonthChart();
    }
  }
}
