import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutViewComponent } from './checkout-view.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { ShippingAddress, ShippingFactory } from '@daffodil/core';
import { ShippingContainer } from 'libs/core/src';

let shippingFactory = new ShippingFactory();
let stubIsShippingInfoValid = true;
let stubShippingInfo = shippingFactory.createShippingAddress();
let stubSelectedShippingOption = 'shippingOption';

@Component({selector: 'shipping', template: ''})
class MockShippingComponent {
  @Input() isShippingInfoValid: Boolean;
  @Input() shippingInfo: ShippingAddress;
  @Input() selectedShippingOption: string;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();
}

@Component({selector: '[shipping-container]', template: '<ng-content></ng-content>', exportAs: 'ShippingContainer'})
class MockShippingContainer {
  isShippingInfoValid$: Observable<boolean> = of(stubIsShippingInfoValid);
  shippingInfo$: Observable<ShippingAddress> = of(stubShippingInfo);
  selectedShippingOption$: Observable<string> = of(stubSelectedShippingOption);
  updateShippingInfo: Function = () => {};
  selectShippingOption: Function = () => {};
}

@Component({selector: 'payment', template: ''})
class MockPaymentComponent {}

describe('CheckoutViewComponent', () => {
  let component: CheckoutViewComponent;
  let fixture: ComponentFixture<CheckoutViewComponent>;
  let shipping: MockShippingComponent;
  let shippingContainer: ShippingContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckoutViewComponent,
        MockShippingComponent,
        MockShippingContainer,
        MockPaymentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shipping = fixture.debugElement.query(By.css('shipping')).componentInstance;
    shippingContainer = fixture.debugElement.query(By.css('[shipping-container]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <shipping>', () => {
    
    it('should set isShippingInfoValid', () => {
      expect(shipping.isShippingInfoValid).toEqual(stubIsShippingInfoValid);
    });

    it('should set shippingInfo', () => {
      expect(shipping.shippingInfo).toEqual(stubShippingInfo);
    });

    it('should set selectedShippingOption', () => {
      expect(shipping.selectedShippingOption).toEqual(stubSelectedShippingOption);
    });
  });

  describe('when <shipping> emits', () => {
    
    describe('updateShippingInfo', () => {
      
      it('should call function passed by ShippingContainer', () => {
        spyOn(shippingContainer, 'updateShippingInfo');

        shipping.updateShippingInfo.emit(stubShippingInfo);

        expect(shippingContainer.updateShippingInfo).toHaveBeenCalledWith(stubShippingInfo);
      });
    });

    describe('selectShippingOption', () => {
      
      it('should call function passed by ShippingContainer', () => {
        spyOn(shippingContainer, 'selectShippingOption');

        shipping.selectShippingOption.emit(stubSelectedShippingOption);

        expect(shippingContainer.selectShippingOption).toHaveBeenCalledWith(stubSelectedShippingOption);
      });
    });

    describe('when <shipping> emits continueToPayment', () => {
      
      it('should call onContinueToPayment', () => {
        spyOn(component, 'onContinueToPayment');
  
        shipping.continueToPayment.emit();
  
        expect(component.onContinueToPayment).toHaveBeenCalled();
      });
    });
  
    describe('ngOnInit', () => {
      
      it('should set showPaymentView to false', () => {
        expect(component.showPaymentView).toBeFalsy();
      });
    });
  
    describe('onContinueToPayment', () => {
      
      it('should set showPaymentView to true', () => {
        component.onContinueToPayment();
  
        expect(component.showPaymentView).toBeTruthy();
      });
    });
  
    describe('when showPaymentView is false', () => {
      
      it('should not render checkout__payment', () => {
        component.showPaymentView = false;
        fixture.detectChanges();
  
        expect(fixture.debugElement.query(By.css('.checkout__payment'))).toBeNull();
      });
    });
  
    describe('when showPaymentView is true', () => {
      
      it('should render checkout__payment', () => {
        component.showPaymentView = true;
        fixture.detectChanges();
  
        expect(fixture.debugElement.query(By.css('.checkout__payment'))).not.toBeNull();
      });
    });
  });
});
