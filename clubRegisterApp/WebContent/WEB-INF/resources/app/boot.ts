import { bootstrap }         from 'angular2/platform/browser'
import { ROUTER_PROVIDERS }  from 'angular2/router';
import { HTTP_PROVIDERS }    from 'angular2/http';
import {Injectable, provide} from 'angular2/core';
import 'rxjs/add/operator/map';
import { AppComponent }      from './app.component';
import { SessionDataService } from './services/session-data.service';
import { LoggerService }      from './services/logger.service';


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    SessionDataService
    
]);