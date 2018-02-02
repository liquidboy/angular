import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { ResourceListComponent } from './resource-list.component';
import { ResourceService } from './resource.service';


@NgModule({
  imports: [ CommonModule, SharedModule, HttpClientModule ],
  declarations: [ ResourceListComponent ],
  entryComponents: [ ResourceListComponent ],
  providers: [ ResourceService ]
})
export class ResourceListModule {
  static customElements = [ ResourceListComponent ];
}
