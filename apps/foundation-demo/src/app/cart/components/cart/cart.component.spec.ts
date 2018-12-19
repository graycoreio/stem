import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { CartComponent } from './cart.component';

import { Cart, CartItem } from '@daffodil/core';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/core/testing';

@Component({template: '<cart [cart]="cartValue"></cart>'})
class TestCartComponent {
  cartValue: Cart;
}

@Component({selector: 'fd-cart-item', template: ''})
class MockCartItemComponent {
  @Input() item: CartItem;
}

describe('CartComponent', () => {
  let component: TestCartComponent;
  let fixture: ComponentFixture<TestCartComponent>;
  let cartItems;
  let cart: CartComponent;

  const cartFactory = new DaffCartFactory();
  const mockCart = cartFactory.create({
    items: new DaffCartItemFactory().createMany(2)
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
        TestCartComponent,
        MockCartItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartComponent);
    component = fixture.componentInstance;

    component.cartValue = mockCart;

    fixture.detectChanges();
    cartItems = fixture.debugElement.queryAll(By.css('fd-cart-item'));
    cart = fixture.debugElement.query(By.css('cart')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a cart', () => {
    expect(fixture.debugElement.query(By.css('.cart'))).not.toBeNull();
  });

  it('can be passed a Cart object', () => {
    expect(cart.cart).toEqual(mockCart);
  });

  it('renders a <fd-cart-item> for every cart.items', () => {
    expect(cartItems.length).toEqual(mockCart.items.length);
  });

  describe('on <fd-cart-item>', () => {
    
    it('should set item', () => {
      expect(cartItems[0].componentInstance.item).toEqual(mockCart.items[0]);  
    });
  });
});
