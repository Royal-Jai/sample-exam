import { Component } from '@angular/core';
import {trigger,state,style,animate,transition,keyframes,group,query,sequence,stagger,animation,useAnimation,animateChild} from '@angular/animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';


  ngOnInit(){
    AOS.init();
  }
}
