import axios from 'axios';

export default axios.create({
	baseURL: 'https://bb-api.mithyalabs.com/api/',
	headers: {
		"Content-type": "application/json",
	}
})
