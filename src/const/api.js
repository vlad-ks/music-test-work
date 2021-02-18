export const DOMAIN = 'https://api.deezer.com';

const prefix = process.env.NODE_ENV === 'production' ? '/api' : '';

// Artist
export const SEARCH_ARTIST = prefix + '/search/artist'; // GET
export const GET_ARTIST = prefix + '/artist/'; // GET  (artist/{id})
export const GET_ARTIST_TOP_LIST = [prefix + '/artist/', '/top']; // GET (artist/{id}/top)
export const GET_ARTIST_ALBUMS = [prefix + '/artist/', '/albums']; // GET (artist/{id}/albums)