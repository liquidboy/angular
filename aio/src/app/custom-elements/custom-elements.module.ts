import { NgModule, NgModuleFactoryLoader,  SystemJsNgModuleLoader } from '@angular/core';
import { ROUTES } from '@angular/router';
import { ElementsLoader } from './elements-loader';
import { ELEMENT_MODULE_PATHS_AS_ROUTES } from './element-registry'


@NgModule({
  providers: [
    ElementsLoader,
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },

    // Providing these routes as a signal to the build system that these modules should be
    // registered as lazy-loadable.
    // TODO(andrewjs): Provide first-class support for providing this.
    {provide: ROUTES, useValue: ELEMENT_MODULE_PATHS_AS_ROUTES, multi: true},
  ],
})
export class CustomElementsModule { }
