import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  private url:string = 'http://localhost:4200/'

  result:any = '';

  constructor( private http:HttpClient ){}

  getInfo(params: string){
    this.http.get(`${this.url}/${params}`)
      .subscribe(data => {this.result = data});

  }

}
