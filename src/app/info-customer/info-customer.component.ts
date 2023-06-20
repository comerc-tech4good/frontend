import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfigResponse } from 'src/app/api/interfaces';
import { ConfigApiService } from 'src/app/api/services/config-api.service';
import { InfoCustomerService } from '../shared/services/info-customer.service';

@Component({
  selector: 'app-info-customer',
  templateUrl: './info-customer.component.html',
  styleUrls: ['./info-customer.component.scss'],
})
export class InfoCustomerComponent implements OnInit {
  config!: ConfigResponse

  listOptions!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private configApi: ConfigApiService,
    private infoCustomerS: InfoCustomerService,
    ) {}
  ngOnInit(): void {
    this.configApi.get().subscribe((data) => {
      this.config = data
      this.listOptions = this.fb.group({
        activity: new FormControl(this.config.activities, [Validators.required]),
        parameters: new FormControl(this.config.parameters, [Validators.required]),
      });
    });
    console.log(this.listOptions.value)
  }
  selected() {
    this.infoCustomerS.saveData(this.listOptions)
  }

  get activity() {
    return this.listOptions.get('activity');
  }
  get parameters() {
    return this.listOptions.get('parameters');
  }
}
