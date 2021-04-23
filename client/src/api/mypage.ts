import axios from 'axios';

{/* myPage 정보 가져오기 */ }
const getMyPageInfo: (data: any) => Promise<any> = async (data) => {
  const userId = data._id;
  const response = await axios.get(`http://localhost:5000/api/mypage/${userId}`, data);
  return response.data;
}

export interface ITemplate {
  _id: string,
  title: string | null,
  userFrom: string,
  applicant: {
    belong: string | null,
    position: string | null,
    name: string | null,
  },
  applyInfo: {
    applyContent: string | null,
    respondent: {
      resName: string | null,
      resJumin: string | null,
      relation: string | null,
    },
    applyAmount: number | null,
  },
  applyDocument: {
    fileName: Array<string | null>,
    etc: string | null
  },
  createdAt: string | null,
  updatedAt: string | null,
  __v: number
}

export default getMyPageInfo;
