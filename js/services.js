const API_KEY = 'a6e08960e811613bb75e8cad7a1dea15';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANG = '&language=ru-RU';

const getData = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw `Что-то пошло не так, ошибка ${response.status}`
    })
    .catch((error) => console.error(error));
};

let url = '';

export const getPagination = async (page) => {
  return await getData(url + `&page=${page}`);
};


export const getTrends = async (type = 'all', period = 'day', page = 1) => {
  url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANG}`;
  return await getData(url + `&page=${page}`);
};

export const getPopular = async (type, page = 1) => {
  url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANG}`;
  return await getData(url + `&page=${page}`);
};

export const getTop = async (type, page = 1) => {
  url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANG}`;
  return await getData(url + `&page=${page}`);
};

export const getVideo = async (id, type) => {
  if (type === 'person') return null;
  const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANG}`;
  return await getData(url);
};

export const search = async (query, page = 1) => {
  url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANG}&query=${query}&include_adult=false`;
  return await getData(url + `&page=${page}`);

};