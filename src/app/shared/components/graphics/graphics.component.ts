import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { InfoCustomerService } from '../../services/info-customer.service';
import { NeighborhoodData, NeighborhoodResponse } from '../../../api/interfaces/neighborhood-response.interface';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {
  @Input()
  response!: NeighborhoodResponse

  searchedParams: string[] = []

  constructor() {}

  ngOnInit(): void {




    // for each object, get the parameter that was looked up for and the 3 neighboor objects
    this.response.objects.forEach((NeighborhoodData) =>  {
      // add to searched parameters
      this.searchedParams.push(NeighborhoodData.parameter)

      var labels: string[] = []

      // for each neighborhood for given parameter, get name and info
      NeighborhoodData.neighborhoods.forEach((Neighborhood) => {
        var neighborhoodName = Neighborhood.name

        // getting info object by iteration (inside iteration: {alquiler: 10, venta: 10, ...})
        for ( const [key, value] of Object.entries( Neighborhood.info)) {

          // add to labels array
          if (!(key in labels)) {
            labels.push(key)
          }



        }

      })

    })



    this.parameter = this.data.parameter
    const labels: string[] = []

    const neightborhoodArray = this.data.neightborhoods.map( ({info}, index) => {
      const neightborhood = []
      for ( const [key,value] of Object.entries( info ) ) {
       if (index === 0)  labels.push(key)
        neightborhood.push(value)
      }
      return neightborhood
    })

    this.barChartData = {
      labels: labels,
      datasets: [
        { data: neightborhoodArray[0], label: this.data.neightborhoods[0].name, backgroundColor:'#ac4e6289', borderWidth:1 },
        { data: neightborhoodArray[1], label: this.data.neightborhoods[1].name, backgroundColor:'#3a7ec264;', borderWidth:1},
        { data: neightborhoodArray[2], label: this.data.neightborhoods[2].name, backgroundColor: '#f8f8f850', borderWidth:1, borderColor:'white'},

      ]
    }
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'y',
    // We use these empty structures as placeholders for dynamic theming.

    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#ac4e6289', borderWidth:1 },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#3a7ec264;', borderWidth:1},
      { data: [ 30, 48, 10, 19,80, 50, 90 ], label: 'Series C', backgroundColor: '#f8f8f850', borderWidth:1, borderColor:'white'},

    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {

  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {

  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }





}
