import instance from './instance';

interface Option {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: object;
  'Content-Type'?: 'application/json' | 'multipart/form-data' | 'application/x-www-form-urlencoded';
}

export const requestWithAuth = async (option: Option, token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const response = await instance(option);
  return response.data;
};

export const requestWithoutAuth = async (option: Option) => {
  const response = await instance(option);
  return response.data;
};
