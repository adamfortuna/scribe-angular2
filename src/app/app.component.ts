import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LookupComponent} from './lookup.component';
import {DashboardComponent} from './dashboard.component';

@Component({ selector: 'scribe' })
@View({
  template: `
    <book-lookup></book-lookup>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES, LookupComponent]
})
@RouteConfig([
  { path: '/', as: 'Dashboard', component: DashboardComponent }
])
export class AppComponent { }
