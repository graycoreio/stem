import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';

import { AddressSummaryComponent } from './address-summary.component';

const daffodilAddressFactory = new DaffAddressFactory();
const stubDaffodilAddress = daffodilAddressFactory.create();

@Component({ template: '<demo-address-summary [address]="addressValue"></demo-address-summary>' })
class WrapperComponent {
  addressValue: DaffAddress = stubDaffodilAddress;
}

describe('AddressSummaryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let addressSummary: AddressSummaryComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        AddressSummaryComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    fixture.detectChanges();

    addressSummary = fixture.debugElement.query(By.css('demo-address-summary')).componentInstance;
  });

  it('should create', () => {
    expect(addressSummary).toBeTruthy();
  });

  it('should be able to take address as input', () => {
    expect(addressSummary.address).toEqual(stubDaffodilAddress);
  });
});
