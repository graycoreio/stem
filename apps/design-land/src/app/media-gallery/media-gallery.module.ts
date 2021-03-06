import { CommonModule } from '@angular/common';
import {
  NgModule,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';


import {
  DaffArticleModule,
  DaffMediaGalleryModule,
  DaffImageModule,
} from '@daffodil/design';
import { MEDIA_GALLERY_EXAMPLES } from '@daffodil/design/media-gallery/examples';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandMediaGalleryRoutingModule } from './media-gallery-routing-module';
import { DesignLandMediaGalleryComponent } from './media-gallery.component';


@NgModule({
  declarations: [
    DesignLandMediaGalleryComponent,
  ],
  imports: [
    CommonModule,
    DesignLandMediaGalleryRoutingModule,
    DesignLandExampleViewerModule,

    DaffArticleModule,
    DaffMediaGalleryModule,
    DaffImageModule,
  ],
})
export class DesignLandMediaGalleryModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    MEDIA_GALLERY_EXAMPLES.map((classConstructor) => ({
      element: createCustomElement(classConstructor, { injector }),
      class: classConstructor,
    }))
      .map((customElement) => {
        // Register the custom element with the browser.
        customElements.define(
          this.componentFactoryResolver.resolveComponentFactory(customElement.class).selector + '-example',
          customElement.element,
        );
      });
  }
}
