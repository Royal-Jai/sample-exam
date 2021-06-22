import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // imgsource = 'assets/images/img_avatar3.png';
  imgprofile = 'imgprofile';
  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    });
  }

}
