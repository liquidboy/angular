import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { CodeExampleComponent } from './code-example.component';
import { CodeModule } from './code.module';

@NgModule({
  imports: [ CommonModule, SharedModule, HttpClientModule, CodeModule ],
  declarations: [ CodeExampleComponent ],
  exports: [ CodeExampleComponent ],
  entryComponents: [ CodeExampleComponent ]
})
export class CodeExampleModule {
  static customElements = [ CodeExampleComponent ];
}
