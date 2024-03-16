import { axiosDefault } from '../interceptors';
import { type IGenreResponse } from './@types';

export const genreService = {
  async getAll() {
    const response = await axiosDefault.get<IGenreResponse>('genre/');
    return response.data.results;
  },
};
