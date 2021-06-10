import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

export interface DesignLandDocument {
  title: string;
  url?: string;
  items: DesignLandDocument[];
}

@Component({
  selector: 'design-land-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarContentComponent {
	docs: DesignLandDocument = {
    title: 'root',
    items: [
      {
        title: 'Foundations',
        items: [
          {
            title: 'Color',
            url: '/color',
            items: [],
          },
          {
            title: 'Typography',
            url: '/typography',
            items: [],
          },
        ],
      },
      {
        title: 'Atoms',
        items: [
          {
            title: 'Button',
            url: '/button',
            items: [],
          },
          {
            title: 'Checkbox',
            url: '/checkbox',
            items: [],
          },
          {
            title: 'Loading Icon',
            url: '/loading-icon',
            items: [],
          },
          {
            title: 'Image',
            url: '/image',
            items: [],
          },
          {
            title: 'Progress Indicator',
            url: '/progress-indicator',
            items: [],
          },
          {
            title: 'Radio',
            url: '/radio',
            items: [],
          },
        ],
      },
      {
        title: 'Molecules',
        items: [
          {
            title: 'Accordion',
            url: 'accordion',
            items: [],
          },
          {
            title: 'Article',
            url: 'article',
            items: [],
          },
          {
            title: 'Callout',
            url: 'callout',
            items: [],
          },
          {
            title: 'Card',
            url: 'card',
            items: [],
          },
          {
            title: 'Container',
            url: 'container',
            items: [],
          },
          {
            title: 'Feature',
            url: 'feature',
            items: [],
          },
          {
            title: 'Form',
            url: 'form',
            items: [],
          },
          {
            title: 'Hero',
            url: 'hero',
            items: [],
          },
          {
            title: 'Image',
            url: 'image',
            items: [],
          },
          {
            title: 'Link Set',
            url: 'link-set',
            items: [],
          },
          {
            title: 'List',
            url: 'list',
            items: [],
          },
          {
            title: 'Navbar',
            url: 'navbar',
            items: [],
          },
          {
            title: 'Media Gallery',
            url: 'media-gallery',
            items: [],
          },
          {
            title: 'Modal',
            url: 'modal',
            items: [],
          },
          {
            title: 'Paginator',
            url: 'paginator',
            items: [],
          },
          {
            title: 'Quantity Dropdown',
            url: 'qty-dropdown',
            items: [],
          },
          {
            title: 'Sidebar',
            url: 'sidebar',
            items: [],
          },
          {
            title: 'Tree',
            url: 'tree',
            items: [],
          },
        ],
      },
    ],
  };

  myContext =
    {
      $implicit: '', docs: this.docs,
    };
}
