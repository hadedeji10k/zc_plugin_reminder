import axios from 'axios'
export default function getUser(token) {
	try {
		const res = await axios({
			url: process.env.ZC_MAIN_API,
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return res.data
	} catch (error) {
		return error.response.data
	}
}
