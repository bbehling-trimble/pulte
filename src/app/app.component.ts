import { Component, OnInit } from '@angular/core';
import {AppComponentService} from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[AppComponentService]
})
export class AppComponent {
 
  constructor(private appComponentService: AppComponentService) {}

}
