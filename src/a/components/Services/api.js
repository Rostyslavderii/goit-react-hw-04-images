import axios from 'axios';

// export const postsRequest = async () => {
//   const { data } = await axios.get(
//     'http://localhost:'
//   )

//   return data;
//}

axios.defaults.baseURL = 'http://pixabay.com/api/';

const API_KEY = '29931239-c309146a190eafd34f9599a01';

export const api = (page, request) => {
  return axios(
    `?key=${API_KEY}&q=${request}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
};


