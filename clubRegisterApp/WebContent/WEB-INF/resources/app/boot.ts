import { bootstrap }            from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS }       from '@angular/http';
import { Injectable, provide }  from '@angular/core';
import { provideRouter }        from '@angular/router';
import {  
  PlatformLocation,  
  Location,  
  LocationStrategy,  
  HashLocationStrategy,  
  PathLocationStrategy,  
  APP_BASE_HREF}  
from '@angular/common';

import 'rxjs/add/operator/map';

import { AppComponent }         from './app.component';
import { routeConfig }          from './router-config';
import { SessionDataService }   from './services/session-data.service';
import { BookingService }       from './services/booking.service';
import { CommonService }        from './services/common.service';
import { AcademyRegistrationService }  from './academy/academyRegistration.service';

bootstrap(AppComponent, [
    provideRouter(routeConfig, {enableTracing:true}),
    HTTP_PROVIDERS,
    SessionDataService,
    BookingService,
    CommonService,
    AcademyRegistrationService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    
]).catch(err => console.error(err));