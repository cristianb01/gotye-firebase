import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-horizontal-graph-bar',
  templateUrl: './horizontal-graph-bar.component.html',
  styleUrls: ['./horizontal-graph-bar.component.scss']
})
export class HorizontalGraphBarComponent {

  @Input() results: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';

  constructor() {
  }

  onSelect(event: any) {
    console.log(event);
  }
}
