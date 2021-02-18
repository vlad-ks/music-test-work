export const DOMAIN = 'https://api.deezer.com';

// Artist
export const SEARCH_ARTIST = '/search/artist'; // GET
export const GET_ARTIST = '/artist/'; // GET  (artist/{id})
export const GET_ARTIST_TOP_LIST = ['/artist/', '/top']; // GET (artist/{id}/top)
export const GET_ARTIST_ALBUMS = ['/artist/', '/albums']; // GET (artist/{id}/albums)