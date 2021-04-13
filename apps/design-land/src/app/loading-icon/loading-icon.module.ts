import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandLoadingIconRoutingModule } from './loading-icon-routing.module';
import { LoadingIconComponent } from './loading-icon.component';

@NgModule({
  declarations: [
    LoadingIconComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DesignLandExampleViewerModule,
    DesignLandLoadingIconRoutingModule,
  ],
})
export class LoadingIconModule {

}
