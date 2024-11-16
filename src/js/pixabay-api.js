import axios from 'axios';

const API_KEY = '47096243-edb5d290a068e7b85af02f816';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data.hits;
}