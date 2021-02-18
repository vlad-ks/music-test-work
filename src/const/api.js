export const DOMAIN = 'https://api.deezer.com';

// Artist
export const SEARCH_ARTIST = 'https://api.deezer.com/search/artist'; // GET
export const GET_ARTIST = 'https://api.deezer.com/artist/'; // GET  (artist/{id})
export const GET_ARTIST_TOP_LIST = ['https://api.deezer.com/artist/', '/top']; // GET (artist/{id}/top)
export const GET_ARTIST_ALBUMS = ['https://api.deezer.com/artist/', '/albums']; // GET (artist/{id}/albums)