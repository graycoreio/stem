import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandCardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    DesignLandCardRoutingModule,
    DesignLandExampleViewerModule,
  ],
})
export class CardModule {

}
