import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/index';

@NgModule({
  imports: [
    StoreModule.forFeature('demoSidebar', reducers),
  ],
})
export class DemoSidebarStateModule { }
