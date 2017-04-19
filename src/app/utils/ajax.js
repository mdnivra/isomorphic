import request from 'superagent-bluebird-promise';

const requestMethod  = {
	get: 'get',
	post: 'post',
};

function sendRequest(method, url, params = {}){
	const promise = request[method](url, params.data);
	return promise;
}


export default {
	get(url){
		return sendRequest(requestMethod.get, url);
	},

	post(url, data){
		return sendRequest(requestMethod.post, url, {data});
	},
};
