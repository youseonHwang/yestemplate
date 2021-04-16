import axios from 'axios';

export const signUp: (data: IUser) => Promise<IUser> = async (data) => {
  const response = await axios.post('/signup', data);
  return response.data;
};

export interface IUser {
  name: string;
  email: string;
  password: string;
}