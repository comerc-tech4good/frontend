import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { NeighborhoodResponse } from 'src/app/api/interfaces/neighborhood-response.interface';
import { InfoCustomerService } from '../../services/info-customer.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

  data!: NeighborhoodResponse[]

  constructor(private infoCustomerS:InfoCustomerService) {}
  ngOnInit(): void {
    if (this.infoCustomerS.threeNeighborhood)
    this.data = this.infoCustomerS.threeNeighborhood
  }
  
  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,

      animations: {
        tension: {
          duration: 500,
          easing: 'linear',
          from: 0.2,
          to: 0,

        }
      },
  };
  public radarChartLabels: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
