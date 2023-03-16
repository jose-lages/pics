import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 86GPZ4i0lrECRDrIYLkl7CjHD7wPLS0FofcPEOTTNAQ',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
