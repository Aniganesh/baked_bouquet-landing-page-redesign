import http from '../http-common';

const getAllCollections = () => {
	return http.get('/collections');
}

export default getAllCollections;