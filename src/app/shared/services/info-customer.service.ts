import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NeighborhoodApiService } from '../../api/services/neighborhood-api.service';
import { NeighborhoodResponse } from '../../api/interfaces/neighborhood-response.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfoCustomerService {



  constructor(private neighborhoodApiS: NeighborhoodApiService,
    private router: Router) { }

  threeNeighborhood: NeighborhoodResponse[] | undefined

  saveData(form: FormGroup) {
    const {activity, parameters} = form.value
    const parche = {activity: parameters, parameters: activity}
    console.log({parche});

    this.neighborhoodApiS.getTop3(parche.activity, parche.parameters).subscribe(data => {
      this.threeNeighborhood = data
      this.router.navigate(['graphics']);

    })
  }
}
