import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() {}

  basicData: any;
  basicOptions: any;
  width: any;
  height: any;
  gradient: any;
  plugin: any = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart: any) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = '#011140';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

  getGradient(ctx: any, chartArea: any): any {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (this.gradient === null || this.width !== chartWidth || this.height !== chartHeight) {
      // Create the this.gradient because this is either the first render
      // or the size of the chart has changed
      this.width = chartWidth;
      this.height = chartHeight;
      this.gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      this.gradient.addColorStop(0, 'blue');
      this.gradient.addColorStop(0.5, 'yellow');
      this.gradient.addColorStop(1, 'red');
    }

    return this.gradient;
  }

  ngOnInit(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: (context: any) => {
            const chart = context.chart;
            const {ctx, chartArea} = chart;

            if (!chartArea) {
              // This case happens on initial chart load
              return null;
            }
            return this.getGradient(ctx, chartArea);
          },
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: 'blue',
        }
      ]
    };


    this.basicOptions = {
      legend: {
        display: false,
      },
      layout: {
        padding: {
          top: 10,
          left: 10,
          right: 10,
          bottom: 10,
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
          ticks: {
            fontColor: 'white',
            fontSize: 24,
            fontFamily: 'Lexend',
            fontWeight: 'bolder',
            padding: 20,
          }
        }],
        yAxes: [{
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
          ticks: {
            fontColor: 'white',
            fontSize: 24,
            family: 'Lexend',
            weight: 'bold',
            padding: 20,
          }
        }]
      }
    };

  }

}
