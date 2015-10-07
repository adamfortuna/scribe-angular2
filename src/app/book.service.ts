export class BookService {
	public books:Array<Object> = [];
	public request:Promise<Object>;


	static loadUser(userId: number) {
		let url = `http://goodcache.herokuapp.com/users/${userId}/books`;

		this.request = $.get(url);

		this.request.then( response => {
			console.log(response);
			this.books = response;
		});

		return this.request;
	}


}
