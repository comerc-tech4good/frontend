import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-two-graphics',
  templateUrl: './two-graphics.component.html',
  styleUrls: ['./two-graphics.component.scss']
})
export class TwoGraphicsComponent {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  onRadar(){
    if(this.checked){
      this.checked = false;
    }else{
      this.checked = true;
    }
  }

}
