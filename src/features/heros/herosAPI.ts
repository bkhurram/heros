import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchHeros() {
	return axios({
		method: 'get',
		url: "https://gateway.marvel.com:443/v1/public/characters",
		params: {
			orderBy: "name",
			limit: 50,
			offset: 0,
			apikey: "73fa0dd704c54b18ed68217e30ddb4c2"
		}
	})
}
