import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NeighborhoodApiService } from '../../api/services/neighborhood-api.service';
import { NeighborhoodResponse } from '../../api/interfaces/neighborhood-response.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoCustomerService {



  constructor(private neighborhoodApiS: NeighborhoodApiService) { }

  threeNeighborhood: NeighborhoodResponse[] | undefined

  saveData(form: FormGroup) {
    const {activity, parameters} = form.value
    this.neighborhoodApiS.getTop3(activity, parameters).subscribe(data => this.threeNeighborhood = data)
  }
}
