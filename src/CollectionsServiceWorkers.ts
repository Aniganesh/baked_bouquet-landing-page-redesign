import http from './http-common';

const getAllCollections = () => {
	return http.get('categories');
}


export default getAllCollections;