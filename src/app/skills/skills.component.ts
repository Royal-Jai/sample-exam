import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  title = 'CODING SKILLS';
  constructor() { }

  htmltitle = 'HTML5';
  htmlcount : number = 0;
  htmlcountstop:any = setInterval(()=>{
    this.htmlcount++;
    if(this.htmlcount == 90){
      clearInterval(this.htmlcountstop);
    }
  },20);

  csstitle = 'CSS3';
  csscount : number = 0;
  csscountstop:any = setInterval(()=>{
    this.csscount++;
    if(this.csscount == 85){
      clearInterval(this.csscountstop);
    }
  },15);

  jstitle = 'JAVASCRIPT';
  jscount : number = 0;
  jscountstop:any = setInterval(()=>{
    this.jscount++;
    if(this.jscount == 70){
      clearInterval(this.jscountstop);
    }
  },15);

  bootstarptitle = 'BOOTSTRAP4';
  bootstrapcount : number = 0;
  bootstrapcountstop:any = setInterval(()=>{
    this.bootstrapcount++;
    if(this.bootstrapcount == 95){
      clearInterval(this.bootstrapcountstop);
    }
  },15);

  wordpresstitle = 'WORDPRESS';
  wordpresscount : number = 0;
  wordpresscountstop:any = setInterval(()=>{
    this.wordpresscount++;
    if(this.wordpresscount == 95){
      clearInterval(this.wordpresscountstop);
    }
  },15);

  reacttitle = 'REACT JS';
  reactcount : number = 0;
  reactcountstop:any = setInterval(()=>{
    this.reactcount++;
    if(this.reactcount == 75){
      clearInterval(this.reactcountstop);
    }
  },15);

  angulartitle = 'ANGULAR';
  angularcount : number = 0;
  angularcountstop:any = setInterval(()=>{
    this.angularcount++;
    if(this.angularcount == 80){
      clearInterval(this.angularcountstop);
    }
  },15);

  phptitle = 'ANGULAR';
  phpcount : number = 0;
  phpcountstop:any = setInterval(()=>{
    this.phpcount++;
    if(this.phpcount == 65){
      clearInterval(this.phpcountstop);
    }
  },15);


  ngOnInit(): void {
  }

}
