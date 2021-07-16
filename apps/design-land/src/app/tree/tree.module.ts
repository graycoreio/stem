import { CommonModule } from '@angular/common';
import {
  ComponentFactoryResolver,
  Injector,
  NgModule,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import {
  DaffArticleModule,
} from '@daffodil/design';
import { DaffTreeModule } from '@daffodil/design/tree';
import { TREE_EXAMPLES } from '@daffodil/design/tree/examples';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandTreeRoutingModule } from './tree-routing.module';
import { DesignLandTreeComponent } from './tree.component';

@NgModule({
  declarations: [
    DesignLandTreeComponent,
  ],
  imports: [
    CommonModule,
    DesignLandTreeRoutingModule,
    DesignLandExampleViewerModule,
    DaffTreeModule,
    DaffArticleModule,
  ],
})
export class DesignLandTreeModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    TREE_EXAMPLES
      .map((classConstructor) => ({
        element: createCustomElement(classConstructor, { injector }),
        class: classConstructor,
      }))
      .map((customElement) => {
        // Register the custom element with the browser.
        customElements.define(
          this.componentFactoryResolver.resolveComponentFactory<unknown>(customElement.class).selector + '-example',
          customElement.element,
        );
      });
  }
}
