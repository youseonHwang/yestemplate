{/* 클라이언트 데이터 전송 */ }
import axios from 'axios';



export const postLoginAsync: (data: any) => Promise<Message> = async (data) => {
  const response = await axios.post('http://localhost:5000/api/login', data,
    { withCredentials: true });
  return response.data;
};
export interface Message {
  email: string;
  password: string;
  isLoginSuccessed: boolean;
  message: string;
}


export default postLoginAsync;

