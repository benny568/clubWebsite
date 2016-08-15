    import { NgModule }       from '@angular/core';
    import { BrowserModule }  from '@angular/platform-browser';
    import { FormsModule }    from '@angular/forms';
    import { AppComponent }       from './app.component';
    import { routing,
             appRoutingProviders } from './app.routing';
             
    import { HomeComponent }       from './components/home.component';

    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        routing
      ],
      declarations: [
        AppComponent,
        HomeComponent
      ],
      providers: [
        appRoutingProviders
      ],
      bootstrap: [ AppComponent ]
    })
    export class AppModule {
    }