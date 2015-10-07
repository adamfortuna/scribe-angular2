import {Component, View, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {ToDatePipe} from './todate.pipe'

@Component({ selector: 'my-dashboard' })
@View({
	template: `
		<div class='row'>
			<h2>Books</h2>
		</div>
		<div class='row'>
			<p class='tagline'>Lookup your books by your Goodreads ID</p>
			<label for='goodreads_id'>Goodreads ID</label>
			<input [(ng-model)]="goodreads_id" id='goodreads_id' />
			<button (click)="loadBooks()">Load Books</button>
		</div>
		<ul class='list-unstyled books'>
			<li *ng-for="#review of books" class="row book rating-{{review.rating}}">
			  <div class='col-md-3 book-image col-xs-3'>
			    <a href='http://www.amazon.com/gp/product/{{review.book.isbn}}/adamfortuna-20' class='book-image' target='_blank'>
			      <img src='{{review.book.image_url}}' />
			      <img src='http://images.amazon.com/images/P/{{review.book.isbn}}.01.ZTZZZZZZ.jpg' />
			    </a>
			    <p class='rating' ng-if='review.rating > 0'><span class='rate'>{{review.rating}}</span> / <span class='rate-outof'>5</span></p>
			  </div>
				<div class='col-md-8 col-md-offset-1 col-lg-offset-0 col-lg-9 col-xs-7 col-xs-offset-1'>
			    <h3>{{review.book.title}}</h3>
			    <p class='review' ng-if='body != ""'>{{review.body}}</p>
			    <p class='meta'>
						<span>{{review.book.authors.author.name}}</span>
			      <span class='date-read' ng-if='review.read_at || review.started_at'>
		          <span ng-if='review.read_at && review.started_at'>
		            Read from {{ review.started_at | toDate | date:'mediumDate'}} to {{review.read_at | toDate | date:'mediumDate'}}.
		          </span>
		          <span ng-if='review.started_at && !review.read_at'>
		            Started on {{ review.started_at | toDate | date:'mediumDate'}}, reading now.
		          </span>
			      </span>
			    </p>
			  </div>
			</li>
		</ul>
	`,
	directives: [FORM_DIRECTIVES, NgFor],
	pipes: [ToDatePipe]
})
export class DashboardComponent {
	public goodreads_id = '2419634';
	public books:Array<Object> = [];

	loadBooks() {
		let url = `http://goodcache.herokuapp.com/users/${this.goodreads_id}/books`;
		console.log("Loading books from dashboard");
		$.get(url).then( response => {
			console.log(response);
			this.books = response;
		});
	}
}
