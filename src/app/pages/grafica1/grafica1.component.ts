import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = 'doughnut';
  // public colors: Color[] = [{ backgroundColor: ['#2e93e9', '#ee1c4c', '#20242f'] }];

  public labels1: string[] = ['Download Sales 1', 'In-Store Sales1', 'Mail-Order Sales1'];
  public labels2: string[] = ['Download Sales 2', 'In-Store Sales2', 'Mail-Order Sales2'];
  public labels3: string[] = ['Download Sales 3', 'In-Store Sales3', 'Mail-Order Sales3'];
  public labels4: string[] = ['Download Sales 4', 'In-Store Sales4', 'Mail-Order Sales4'];

  public data1: number[][] = [[50, 150, 100]];
  public data2: number[][] = [[250, 250, 200]];
  public data3: number[][] = [[350, 350, 300]];
  public data4: number[][] = [[450, 450, 400]];

  public grafColors1: Color[] = [{ backgroundColor: ['#E89953', '#634224', '#B0580B'] }];
  public grafColors2: Color[] = [{ backgroundColor: ['#A54FE8', '#A54FE8', '#6807B3'] }];

  public grafColors3: Color[] = [{ backgroundColor: ['#09E3C6', '#07B39C', '#046357'] }];

  public grafColors4: Color[] = [{ backgroundColor: ['#7AE84F', '#1F6304', '#38B307'] }];

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
