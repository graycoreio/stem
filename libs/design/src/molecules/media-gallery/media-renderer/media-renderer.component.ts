import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffMediaGalleryComponent } from '../media-gallery.component';
import { DaffMediaGalleryRegistry } from '../registry/media-gallery.registry';

/**
 * Dynamically renders the selected `DaffThumbnailDirective` in a `daff-media-gallery` any time the selected thumbnail
 * changes.
 */
@Component({
  selector: 'daff-media-renderer',
  templateUrl: './media-renderer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffMediaRendererComponent implements OnInit {
	@Input() component: Type<unknown>;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private registry: DaffMediaGalleryRegistry,
		private gallery: DaffMediaGalleryComponent,
	) {}

	@ViewChild(TemplateRef, { static: true, read: ViewContainerRef })
	slot: ViewContainerRef;

	ngOnInit() {
	  this.registry.galleries[this.gallery.name].subscribe((gallery) => {

	    /**
					 * Clear out the slot for the dynamically rendered thumbnail
					 */
	    this.slot.clear();

	    const _selectedThumbnail = gallery.thumbnails.filter(media => media.selected).shift();

	    /**
					 * If there's no selected media, render nothing.
					 */
	    if(!_selectedThumbnail) {
	      return;
	    }

	    const _selectedThumbnailComponent = _selectedThumbnail.component;

	    /**
					 * Create the component to insert.
					 */
	    const component = this.componentFactoryResolver.resolveComponentFactory(
				<Type<unknown>>_selectedThumbnailComponent.constructor,
	    );
	    const componentRef = this.slot.createComponent(component);

	    /**
					 * Fill the component with it's values from the original component
					 */
	    component.inputs.forEach(input => {
	      componentRef.instance[input.propName] = _selectedThumbnailComponent[input.propName];
	    });

	    /**
					 * Trigger a change detection on the component tree, outside the cycle to address
					 * the fact that the component was created outside a typical CD loop.
					 */
	    componentRef.changeDetectorRef.detectChanges();
	  });
	}
}
