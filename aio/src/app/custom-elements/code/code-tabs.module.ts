import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { CodeTabsComponent } from './code-tabs.component';
import { MatTabsModule } from '@angular/material';
import { CodeModule } from './code.module';

@NgModule({
  imports: [ CommonModule, SharedModule, HttpClientModule, MatTabsModule, CodeModule ],
  declarations: [ CodeTabsComponent ],
  exports: [ CodeTabsComponent ],
  entryComponents: [ CodeTabsComponent ]
})
export class CodeTabsModule {
  static customElements = [ CodeTabsComponent ];
}
