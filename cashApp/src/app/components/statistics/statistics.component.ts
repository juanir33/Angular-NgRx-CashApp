import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/auth/user';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
 
  constructor() {
    
   }

  ngOnInit(): void {
    
  }

}
