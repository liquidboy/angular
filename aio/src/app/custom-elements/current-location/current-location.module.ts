import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { CurrentLocationComponent } from './current-location.component';



@NgModule({
  imports: [ CommonModule, SharedModule, HttpClientModule ],
  declarations: [ CurrentLocationComponent ],
  entryComponents: [ CurrentLocationComponent ]
})
export class CurrentLocationModule {
  static customElements = [ CurrentLocationComponent ];
}
