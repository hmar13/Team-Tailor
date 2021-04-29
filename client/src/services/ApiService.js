const BASE_URL = "https://api.chucknorris.io/jokes";

export const getCategories = () => {
  try {
    return fetchRequestChuckNorris("/categories");
  } catch (error) {
    console.error("Get request of categories error: ", error);
  }
};

export const getRandomByCategoryName = (name) => {
  try {
    return fetchRequestChuckNorris(`random?category=${name}`);
  } catch (error) {
    console.error("Get request of random by category name error: ", error);
  }
};

export const getJokeByQueryWord = (word) => {
  try {
    return getJokeByQueryWord(`/search?query=${word}`);
  } catch (error) {
    console.error("Get request of joke by query word error: ", error);
  }
};

export const fetchRequestChuckNorris = (url) => {
  return fetch(BASE_URL + url)
    .then((res) => (res.status <= 400 ? res : Promise.reject()))
    .then((res) => (res.status === 204 ? res : res.json()))
    .catch((error) => {
      console.error(`Error fetching ${BASE_URL}${url}: `, error);
    });
};