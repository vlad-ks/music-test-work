import memoize from "lodash/memoize";


// Artist
export const getArtistRoute = memoize((id) => getRouteById(id, '/artist'));



/**
 * Get Route by Id
 * if id = undefined then return "/path/:id"
 *
 * @param id
 * @param path
 * @returns {string|string}
 */
const getRouteById = (id = ':id', path) => {
	return  id
		? path + '/' + id
		: path ;
}