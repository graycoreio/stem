import { Component, Input } from '@angular/core';
import { DaffodilAddress } from '@daffodil/core';

@Component({
  selector: 'address-summary',
  templateUrl: './address-summary.component.html'
})
export class AddressSummaryComponent {
  
  @Input() address: DaffodilAddress;
}
