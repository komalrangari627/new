import axios from "axios";

const baseUrl = `${import.meta.env.VITE_API_URL}/test`;

export async function fetchData() {
  try {
    const result = await axios.get(`${baseUrl}/hello`);
    return result;
  } catch (err) {
    console.error("Error while fetching data:", err);
    throw err;
  }
}
