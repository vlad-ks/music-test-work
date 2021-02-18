import {makeAutoObservable} from "mobx";
import {ERROR_REQ_TEXT} from "const/helpers";
import {SEARCH_ARTIST} from "const/api";
import request from "utils/request";


export class Search {
	term = ""
	items = []
	loading = false

	constructor() {
		makeAutoObservable(this, {
			term: false
		});

		this.url = SEARCH_ARTIST;
	}

	*getItems(term) {
		this.items = [];
		this.loading = true;
		this.term = term;

		try {
			const res = yield request.get(this.url, {
				params: {
					q: term
				}
			});

			this.items = res.data ?? [];

		} catch (e) {
			alert(ERROR_REQ_TEXT);
		} finally {
			this.loading = false;
		}
	}
}

export default new Search();