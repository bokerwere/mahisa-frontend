import axios from "axios"
import { getStorage } from "../utils/storage"
import toastMessage from "../utils/toastMessage"
import { APP_NAME } from "../data/strings"

const useAxios = () => {
	return async (obj) => {
		const { token } = await getStorage()
		let head = { Authorization: `Bearer ${token}`}
		const { headers=head, method, data = {}, url, params = {} } = obj
		try {
			let res = await axios({
				headers,
				method,
				url,
				data,
				params,
			})
			return { res: res.data, status: res.status }
		} catch (e) {
			if (e.message === "Network Error") {
				toastMessage("error", "Network connection failed")
				return { err: e.message }
			}
			if (e.response && e.response.data && e.response.data.message) {
				toastMessage("error", e.response.data.message)
			}
			if (e.response && e.response.data && e.response.data.messages) {
				toastMessage("error", e.response.data.messages[0])
			}
			return { err: e.response && e.response.data ? e.response.data : e }
		}
	}
}

export default useAxios
