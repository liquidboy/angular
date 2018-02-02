import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { ContributorListComponent } from './contributor-list.component';
import { ContributorService } from './contributor.service';
import { ContributorComponent } from './contributor.component';

@NgModule({
  imports: [ CommonModule, SharedModule, HttpClientModule ],
  declarations: [ ContributorListComponent, ContributorComponent ],
  entryComponents: [ ContributorListComponent ],
  providers: [ ContributorService ]
})
export class ContributorListModule {
  static customElements = [ ContributorListComponent ];
}
