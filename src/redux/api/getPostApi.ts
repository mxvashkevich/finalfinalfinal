import axios, { AxiosResponse } from 'axios';
import { IPost } from '../types/types.ts';

function getPosts(): Promise<AxiosResponse<IPost[]>> {
  return axios({
    method: 'get',
    url: 'http://localhost:3000/posts',
  });
}

export default getPosts;
