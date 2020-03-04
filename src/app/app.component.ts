import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppModule} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Permission Consumer';

  ngOnInit() {
  }

}
