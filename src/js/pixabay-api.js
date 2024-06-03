const BASE_URL = 'https://pixabay.com';
const END_POINT = '/api/';
const API_KEY = '15968525-5a53092c6d62a7b9e458a529a';

export function getImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    safesearch: true,
    orientation: 'horizontal',
    q: query,
  });

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Referrer-Policy': 'no-referrer',
    'X-Requested-With': 'XMLHttpRequest',
  };
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url, headers)
    .then(res => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      if (res.status === 0) {
        throw new Error('No response from server');
      }
      return res.json()
    })
    .catch(error => {
      console.log(error.message);
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
      return;
    });
}