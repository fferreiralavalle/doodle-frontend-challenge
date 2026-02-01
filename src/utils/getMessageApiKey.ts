/** Returns the API key inside your .env file */
const getMessageApiKey = (): string => import.meta.env.VITE_API_KEY;

export default getMessageApiKey;