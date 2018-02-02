import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { EmbeddedStackblitzComponent, LiveExampleComponent } from './live-example.component';



@NgModule({
  imports: [ CommonModule, SharedModule, HttpClientModule ],
  declarations: [ LiveExampleComponent, EmbeddedStackblitzComponent ],
  entryComponents: [ LiveExampleComponent, EmbeddedStackblitzComponent ]
})
export class LiveExampleModule {
  static customElements = [ LiveExampleComponent ];
}
