import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent implements OnInit {
  @Input() title: string;
  @Input() labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  // @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  @Input() data: number[][] = [[350, 450, 100]];

  @Input() colors: Color[] = [{ backgroundColor: ['#2e93e9', '#ee1c4c', '#20242f'] }];
  // Doughnut
  // public doughnutChartData: MultiDataSet = [[350, 450, 100]];
  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartType: ChartType = 'doughnut';
  // public colors: Color[] = [{ backgroundColor: ['#2e93e9', '#ee1c4c', '#20242f'] }];

  constructor() {}

  ngOnInit(): void {}
  // events
  public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }
}
