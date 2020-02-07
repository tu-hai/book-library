import { Component, OnInit } from '@angular/core';
import { Service} from './sevice'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor (private Service: Service) {}
  ngOnInit () {

    let param = {
      id: 1
    }
    this.Service.getUser(param).subscribe(res => {
      console.log(res)
    })
  }
}
