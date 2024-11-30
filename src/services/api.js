import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchComments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
