import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidecomponent',
  templateUrl: './sidecomponent.component.html',
  styleUrls: ['./sidecomponent.component.scss']
})
export class SidecomponentComponent implements OnInit {

  constructor() { }

  navbarsection = 'navbarsection';
  portfoliosection = 'portfoliosection';
  commonsection = 'commonsection';

  ngOnInit(): void {
  }

}
