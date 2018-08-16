import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ImageGalleryComponent } from './image-gallery.component';
import { Image } from '../../interfaces/image';
import { ImageFactory } from '../../testing/factories/image.factory';

@Component({template: '<image-gallery [images]="images" [selectedImage]="selectedImageValue"></image-gallery>'})
class TestImageGalleryWrapper {
  images: Image[] = [];
  selectedImageValue: Image;
}

@Component({selector: 'image-list', template: ''})
class MockImageListComponent {
  @Input() images: Image[];
  @Input() selectedImage: Image;
}

let imageFactory: ImageFactory = new ImageFactory();

describe('ImageGalleryComponent', () => {
  let component: TestImageGalleryWrapper;
  let fixture: ComponentFixture<TestImageGalleryWrapper>;

  let imageGalleryComponent: ImageGalleryComponent;
  let stubImages: Image[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestImageGalleryWrapper,
        ImageGalleryComponent,
        MockImageListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImageGalleryWrapper);
    component = fixture.componentInstance;

    stubImages = [
      new ImageFactory().create(),
      new ImageFactory().create(),
    ];

    component.images = stubImages;
    component.selectedImageValue = stubImages[0];
    
    fixture.detectChanges();

    imageGalleryComponent = fixture.debugElement.query(By.css('.image-gallery')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('using the `image-gallery` component inside another component', () => {

    it('should be able to take images as input', () => {
      expect(imageGalleryComponent.images).toEqual(stubImages);
    });
  
    it('should be able to take a selectedImage as input', () => {
      expect(imageGalleryComponent.selectedImage).toEqual(component.selectedImageValue);
    });
  });

  describe('ngOnInit', () => {

    it('should default the selectedImage to the first image if the selectedImage is not set', () => {
        imageGalleryComponent.selectedImage = null;
        expect(imageGalleryComponent.selectedImage).toBe(null);
        imageGalleryComponent.ngOnInit();
        expect(imageGalleryComponent.selectedImage).toBe(stubImages[0]);
    });

    it('should not set a selected image if there are no images passed in.', () => {
      imageGalleryComponent.images = [];
      imageGalleryComponent.selectedImage = null;

      imageGalleryComponent.ngOnInit();

      expect(imageGalleryComponent.images).toEqual([]);
      expect(imageGalleryComponent.selectedImage).toBe(null);
    });
  });

  describe('when a selectedImage is set', () => {

    let selectedImage;

    beforeEach(() => {
      selectedImage = fixture.debugElement.query(By.css('img'));
    });

    it('should show the selected image', () => {
      expect(selectedImage.nativeElement.src).toEqual(imageGalleryComponent.selectedImage.url);
    });

    it('should set an alt tag on the image', () => {
      expect(selectedImage.nativeElement.alt).toEqual(imageGalleryComponent.selectedImage.label);
    })
  });

  describe('when images is not set or is empty', () => {

    it('should not show a selected image', () => {
      component.images = [];
      component.selectedImageValue = null;

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('image-gallery') === null).toBe(false);
    });
  });

  describe('changeImage', () => {

    it('should set selectedImage to argument', () => {
      let selectedImage:Image = imageFactory.create();
      imageGalleryComponent.changeImage(selectedImage);
      
      expect(imageGalleryComponent.selectedImage).toEqual(selectedImage);
    });
  });

  describe('on `image-list`', () => {

    let imageListComponent;

    beforeEach(() => {
      imageListComponent = fixture.debugElement.query(By.css('image-list'));
    });

    it('sets images', () => {
      expect(imageListComponent.componentInstance.images).toEqual(stubImages);
    });

    it('sets selectedImage', () => {
      expect(imageListComponent.componentInstance.selectedImage).toEqual(stubImages[0]);
    });
  });
});
