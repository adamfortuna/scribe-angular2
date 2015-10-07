import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';

@Component({ selector: 'my-dashboard' })
@View({
	template: `
		<h2>Books</h2>
		<ul>
			<li>Books will be here.</li>
		</ul>
	`,
	directives: [FORM_DIRECTIVES]
})
export class DashboardComponent {
	public name = 'john';
	public message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
}
