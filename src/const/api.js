export const DOMAIN = 'https://api.deezer.com';

// Artist
export const SEARCH_ARTIST = '/api/search/artist'; // GET
export const GET_ARTIST = '/api/artist/'; // GET  (artist/{id})
export const GET_ARTIST_TOP_LIST = ['/api/artist/', '/top']; // GET (artist/{id}/top)
export const GET_ARTIST_ALBUMS = ['/api/artist/', '/albums']; // GET (artist/{id}/albums)