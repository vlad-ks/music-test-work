import {makeAutoObservable} from "mobx";
import {ERROR_REQ_TEXT} from "const/helpers";
import {GET_ARTIST, GET_ARTIST_ALBUMS, GET_ARTIST_TOP_LIST} from "const/api";
import request from "utils/request";
import {routerStore} from "../index";



export class Artist {
	lastId = null
	details = {}
	top = []
	albums = []
	loading = true

	constructor() {
		makeAutoObservable(this);
	}

	preventLoading() {
		this.loading = true;
	}

	*getDetails(id) {
		if (id === this.lastId) {
			this.loading = false;
			return;
		}

		try {
			 let res = yield Promise.all([
				request.get(GET_ARTIST + id),
				request.get(GET_ARTIST_TOP_LIST.join(id)),
				request.get(GET_ARTIST_ALBUMS.join(id)),
			]);

		 	res = {
		 		details: res[0],
				top: res[1],
				albums: res[2]
			}

			// redirect home if no data
			if (res.details.error) {
				routerStore.replace('/');
			} else {
				this.details = res.details;
				this.top = res.top.data;
				this.albums = res.albums.data;
				this.lastId = id;
			}
		} catch (e) {
			alert(ERROR_REQ_TEXT);
		} finally {
			this.loading = false;
		}
	}
}

export default new Artist();