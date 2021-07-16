import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  DaffSidebarModule,
  DaffLinkSetModule,
  DaffArticleModule,
} from '@daffodil/design';

import { DesignLandAppRoutingModule } from './app-routing.module';
import { DesignLandAppComponent } from './app.component';
import { DesignLandSidebarContentModule } from './core/sidebar-content/sidebar-content.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DesignLandAppRoutingModule,
    HttpClientModule,
    DaffSidebarModule,
    DaffLinkSetModule,
    DaffArticleModule,
    DesignLandSidebarContentModule,
  ],
  declarations: [
    DesignLandAppComponent,
  ],
  bootstrap: [
    DesignLandAppComponent,
  ],
})
export class AppModule { }
