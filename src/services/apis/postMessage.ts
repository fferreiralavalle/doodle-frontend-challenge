import { MESSAGE_URL } from "../../config/Urls";
import getMessageApiKey from "../../utils/getMessageApiKey";
import type { IPostMessage } from "../types/messaage";

async function postMessage(message: IPostMessage) {
  const res = await fetch(MESSAGE_URL, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${getMessageApiKey()}`,
	},
	body: JSON.stringify(message)
  })

  if (!res.ok) {
    throw new Error('Failed to post message')
  }

  return res.json()
}

export default postMessage;