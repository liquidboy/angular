import { Injectable, NgModuleFactoryLoader, NgModuleRef } from '@angular/core';
import { registerAsCustomElements } from '@angular/elements';
import { ELEMENT_MODULE_PATHS } from './element-registry';

@Injectable()
export class ElementsLoader {
  /** Map of unregistered custom elements and their respective module paths to load. */
  unregisteredElements = new Map(ELEMENT_MODULE_PATHS);

  constructor(private ngModuleFactoryLoader: NgModuleFactoryLoader,
              private ngModuleRef: NgModuleRef<any>) { }

  /**
   * Queries the provided element for any custom elements that have not yet been registered with
   * the browser.
   */
  loadContainingCustomElements(element: HTMLElement) {
    Array.from(this.unregisteredElements.keys())
        .filter(s => element.querySelector(s))
        .forEach(s => this.registerCustomElement(s));
  }

  /**
   * Registers a custom element using the selector and its registered module. Will ignore
   * requests to register elements that already exist. Throws an error if the selector is missing
   * a registered module path.
   */
  registerCustomElement(selector: string) {
    const modulePath = this.unregisteredElements.get(selector);
    if (!modulePath) {
      throw Error(`No module path registered for custom element with selector ${selector}.`);
    }

    this.ngModuleFactoryLoader.load(modulePath).then(module => {
      // All registered modules have a static `customElements` property that contains the list of
      // custom elements it declares.
      // TODO(andrewjs): This should be better supported by Angular.
      const customElements = module.moduleType['customElements'];
      const boostrapFn =
          () => Promise.resolve(this.ngModuleRef).then(ref => module.create(ref.injector));

      registerAsCustomElements(customElements, boostrapFn);
    });

    // Remove selector from map of unregistered elements so that it is no longer queried for.
    // TODO(andrewjs): Handle case where registration fails.
    this.unregisteredElements.delete(selector);
  }
}
