import {
  Component,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ARTICLE_EXAMPLES } from '@daffodil/design/article/examples';
import { BUTTON_EXAMPLES } from '@daffodil/design/button/examples';
import { CALLOUT_EXAMPLES } from '@daffodil/design/callout/examples';
import { CARD_EXAMPLES } from '@daffodil/design/card/examples';
import { CHECKBOX_EXAMPLES } from '@daffodil/design/checkbox/examples';
import { HERO_EXAMPLES } from '@daffodil/design/hero/examples';
import { LIST_EXAMPLES } from '@daffodil/design/list/examples';
import { LOADING_ICON_EXAMPLES } from '@daffodil/design/loading-icon/examples';
import { MEDIA_GALLERY_EXAMPLES } from '@daffodil/design/media-gallery/examples';
import { RADIO_EXAMPLES } from '@daffodil/design/radio/examples';

@Component({
  selector: 'design-land-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DesignLandAppComponent {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    [
      ...ARTICLE_EXAMPLES,
      ...BUTTON_EXAMPLES,
      ...RADIO_EXAMPLES,
      ...CARD_EXAMPLES,
      ...CALLOUT_EXAMPLES,
      ...CHECKBOX_EXAMPLES,
      ...HERO_EXAMPLES,
      ...LOADING_ICON_EXAMPLES,
      ...MEDIA_GALLERY_EXAMPLES,
      ...LIST_EXAMPLES,
    ].map((classConstructor) => ({
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
