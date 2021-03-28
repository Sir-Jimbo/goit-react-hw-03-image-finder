function fetchImg(query, page, perPage) {
  const BASE_URL = "https://pixabay.com/api";
  const KEY = "17935593-e396bfe1aec92e4aa57ec3c04";
  return fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (!data.hits.length)
        throw new Error("По вашему запросу ничего не найдено"); // проброс исключения как ошибки
      return data;
    })
    .catch((err) => err); // передача ошибки в catch для последующей обработки
}

const api = {
  fetchImg,
};

export default api;