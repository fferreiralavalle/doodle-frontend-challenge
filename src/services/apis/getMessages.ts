import { MESSAGE_URL } from "../../config/Urls";
import getMessageApiKey from "../../utils/getMessageApiKey";

interface IFetchMessageParam {
	limit?: number
	before?: Date
}

async function fetchMessages(param: IFetchMessageParam = { limit: 10 }) {
  const { limit = 10, before: beforeParam } = param;
  const after = beforeParam ? beforeParam?.toJSON() : (new Date()).toJSON()
  const res = await fetch(`${MESSAGE_URL}?limit=${limit}&before=${after}`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${getMessageApiKey()}`,
	},
  })

  if (!res.ok) {
    throw new Error('Failed to fetch messages')
  }

  return res.json()
}

export default fetchMessages;