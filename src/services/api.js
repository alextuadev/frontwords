const BASE_URL = 'http://localhost:3001/'

export const searchWord = async (text) => {
  try {
    return await fetch(`${BASE_URL}iecho?text=${text}`);
  } catch (e) {
    console.warn("error", e)
  }
}