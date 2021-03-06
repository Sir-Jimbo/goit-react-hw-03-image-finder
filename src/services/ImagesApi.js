import axios from 'axios';

const fetchImagesWithQuery = (query, page = 1) => {
  const apiKey = '17935593-e396bfe1aec92e4aa57ec3c04';
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data.hits);
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImagesWithQuery };