import http from './http-common';

const getAllOccasions = ()=>{
	return http.get('occasions');
}

export default getAllOccasions;