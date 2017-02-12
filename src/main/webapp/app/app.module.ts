import './vendor.ts';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { CarSpottersFrontSharedModule, UserRouteAccessService } from './shared';
import { CarSpottersFrontAdminModule } from './admin/admin.module';
import { CarSpottersFrontAccountModule } from './account/account.module';
import { CarSpottersFrontEntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { HomeComponent } from './home';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';
import {LastPhotosComponent} from "./photos/last-photos/last-photos.component";
import {PhotoThumbComponent} from "./photos/photo-thumb/photo-thumb.component";
import {TopAuthorsComponent} from "./photos/top-authors/top-authors.component";


@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        CarSpottersFrontSharedModule,
        CarSpottersFrontAdminModule,
        CarSpottersFrontAccountModule,
        CarSpottersFrontEntityModule
    ],
    declarations: [
        JhiMainComponent,
        HomeComponent,
        LastPhotosComponent,
        PhotoThumbComponent,
        TopAuthorsComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class CarSpottersFrontAppModule {}
