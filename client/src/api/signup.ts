import axios from 'axios';

export const signUp: (data: any) => Promise<Message> = async (data) => {
  const response = await axios.post(' http://localhost:5000/api/user/signup', data);
    return response.data;
  }
  
  export interface Message {
    name: string;
    email: string;
    password: string;
    msg: string;
    success: boolean | null;
  }

export default signUp;
