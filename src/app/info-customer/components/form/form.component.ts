import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(
    private fb: FormBuilder
  ) {

  }

  listOptions = this.fb.group({
    activity: new FormControl(null, [Validators.required]),
    parameters: new FormControl(null, [Validators.required]),
  });

  activityList = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  parametersList = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  selected() {
    console.log(this.listOptions.value.activity);
  }

  get activity() { return this.listOptions.get('activity'); }
  get parameters() { return this.listOptions.get('parameters'); }

}
