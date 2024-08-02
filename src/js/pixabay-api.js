import axios from 'axios';

async function fetchImages(query, page) {
  const apiKey = '45115917-7726aefcae109b05971acac93';

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: 15,
      },
    });

    return response.data;
  } catch {
    throw new Error();
  }
}

export { fetchImages };
