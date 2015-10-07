import {bind, bootstrap} from 'angular2/angular2';
import {routerBindings, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {BookService} from './book.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
	routerBindings(AppComponent),
	BookService,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
