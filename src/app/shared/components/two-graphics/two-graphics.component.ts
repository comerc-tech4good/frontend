import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { InfoCustomerService } from '../../services/info-customer.service';
import { Router } from '@angular/router';
import { NeighborhoodResponse } from '../../../api/interfaces/neighborhood-response.interface';

@Component({
  selector: 'app-two-graphics',
  templateUrl: './two-graphics.component.html',
  styleUrls: ['./two-graphics.component.scss']
})
export class TwoGraphicsComponent implements OnInit {

  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  data!: NeighborhoodResponse[]

  constructor(
    private infoCustomerS:InfoCustomerService,
    private router: Router
    ) {}

  ngOnInit(): void {
    !this.infoCustomerS.threeNeighborhood ? this.router.navigate(['home']):
    this.data = this.infoCustomerS.threeNeighborhood
    console.log(this.data);

  }

  onRadar(){
      this.checked = !this.checked;
  }

}
