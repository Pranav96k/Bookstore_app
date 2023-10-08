import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your Flask server URL

export const fetchBookByQuery = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/books?q=${query}`);
    return response.data[0]; // Assuming you want to display the first matching book
  } catch (error) {
    console.error('Error fetching book by query:', error);
    return null;
  }
};
