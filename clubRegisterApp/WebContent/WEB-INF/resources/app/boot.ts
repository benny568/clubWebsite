import { bootstrap }            from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS }       from '@angular/http';
import { Injectable, provide }  from '@angular/core';

import 'rxjs/add/operator/map';

import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { SessionDataService }   from './services/session-data.service';
import { BookingService }       from './services/booking.service';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    SessionDataService,
    BookingService
    
]).catch(err => console.error(err));