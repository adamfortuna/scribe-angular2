import {Http, HTTP_BINDINGS} from 'angular2/http';

export class BookService {
	static loadUser(userId: number) {
		let url = `http://goodcache.herokuapp.com/users/${userId}/books`;
		alert(`Loading ${url}`);
//		Http.get(url).map (res => res.json())
	}
	// getCharacters() { return Promise.resolve(CHARACTERS); }
	//
	// getCharacter(id: number) {
	// 	return Promise.resolve(CHARACTERS)
	// 		.then((characters) => { return characters.filter((c) => {
	// 			return c.id === id;
	// 		})[0]});
	// }
}
