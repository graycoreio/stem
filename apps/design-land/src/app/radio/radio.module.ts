import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandRadioRoutingModule } from './radio-routing.module';
import { RadioComponent } from './radio.component';

@NgModule({
  declarations: [
    RadioComponent,
  ],
  imports: [
    DesignLandExampleViewerModule,
    DesignLandRadioRoutingModule,
    CommonModule,
  ],
})
export class RadioModule {

}
