import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfigResponse } from 'src/app/api/interfaces';
import { ConfigApiService } from 'src/app/api/services/config-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  config!: ConfigResponse;

  listOptions!: FormGroup;
  constructor(private fb: FormBuilder, private configApi: ConfigApiService) {}
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
    console.log(this.listOptions.value.activity);
  }

  get activity() {
    return this.listOptions.get('activity');
  }
  get parameters() {
    return this.listOptions.get('parameters');
  }
}
