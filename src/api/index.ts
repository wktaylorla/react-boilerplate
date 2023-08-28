import { AxiosResponse } from 'axios';

import instance from './instance';

interface Option {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: object;
  'Content-Type'?: 'application/json' | 'multipart/form-data' | 'application/x-www-form-urlencoded';
}

export const requestWithAuth = async <T>(option: Option, token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  const response: AxiosResponse<T> = await instance(option);
  return response.data;
};

export const requestWithoutAuth = async <T>(option: Option) => {
  delete instance.defaults.headers.common.Authorization;

  const response: AxiosResponse<T> = await instance(option);
  return response.data;
};
