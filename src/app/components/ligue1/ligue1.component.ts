import { Component, OnInit } from '@angular/core';
import {LeagueService} from '../../services/league.service';

@Component({
  selector: 'app-ligue1',
  templateUrl: './ligue1.component.html',
  styleUrls: ['./ligue1.component.css']
})
export class Ligue1Component implements OnInit {
  league: any;

  constructor() { }

  ngOnInit(): void {
  }

}
