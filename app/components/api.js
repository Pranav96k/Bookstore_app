import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your Flask server URL

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book data:', error);
    return [];
  }
}
