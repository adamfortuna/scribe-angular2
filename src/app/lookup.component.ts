import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';
import {BookService} from './book.service';

@Component({ selector: 'book-lookup' })
@View({
	template: `
    <div class='row'>
      <h2>Lookup Books by Goodreads ID</h2>
		  <input [(ng-model)]="goodreads_id" />
		  <button (click)="loadBooks()">Load Books</button>
    </div>
	`,
	directives: [FORM_DIRECTIVES]
})
export class LookupComponent {
	public goodreads_id = '2419634';

	loadBooks() {
    console.log(`loading books for user ${this.goodreads_id}`);
    BookService.loadUser(+this.goodreads_id);
	}
}
