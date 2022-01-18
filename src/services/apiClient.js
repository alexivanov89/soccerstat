import axios from 'axios';
import { store } from '../store';
import { API_KEY, API_URL } from '../config';
import { SetError } from '../store/actions/creator/error';

const axiosInstance = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  headers: { 'X-Auth-Token': API_KEY },
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status >= 200 && error.response.status < 300) {
      store.dispatch(SetError(error.message));
    } else if (error.response.status > 400) {
      store.dispatch(SetError('Ошибка. Запрос данных не был успешен.'));
    } else {
      return Promise.reject(error);
    }
  },
);

export const apiClient = () => {
  return axiosInstance;
};
