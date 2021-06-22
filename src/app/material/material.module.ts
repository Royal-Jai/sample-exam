import { NgModule } from '@angular/core';
import { MatToolbarModule } from  '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';


const materialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule
]

@NgModule({
  imports: [
    materialComponents,
  ],
  exports:[
    materialComponents
  ],
  declarations: [

  ]
})
export class MaterialModule { }
