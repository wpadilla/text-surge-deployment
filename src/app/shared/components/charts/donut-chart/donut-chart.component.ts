import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ts-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  constructor() {}

  @Input() data: any = {};
  @Input() options: any = {};
  @Input() plugins: any[] = [];
  @Input() width: string | number = '100%';
  @Input() height: string | number = '100%';
  @Input() centerTitle = '';
  @Input() centerSubtitle = '';

  ngOnInit(): void {
  }

}
