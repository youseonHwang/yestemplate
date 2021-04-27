{/* 템플릿 불러오기, 저장, 수정, 삭제 */ }
import axios from 'axios';
import { ITemplate } from '../api/mypage'

{/* 저장 */ }
export const saveTemplate: (data: any) => Promise<ITemplate> = async (data) => {
  const response = await axios.post(
    'http://localhost:5000/api/template/save', data,
    {
      withCredentials: true,
    }
  );
  if (!response.data.success) {
    throw new Error('저장에 실패했습니다.');
  }
  return response.data;
};

{/* 파일 업로드 */ }
export interface UploadResult {
  //location: string;
  isUpload: null | boolean;
}
export const uploadFile: (data: any) => Promise<UploadResult> = async (data) => {
  console.log('client api의 uploadfile로 들어왔습니다.')
  console.log(data.formData.get('uploadFile'))

  const response = await axios.post('http://localhost:5000/api/template/file', data.formData,
    { withCredentials: true });
  console.log(response)
  if (!response.data.isUpload) {
    throw new Error('저장에 실패했습니다.');
  }
  return response.data;
};

{/* 수정 */ }
export const editTemplate: (data: any) => Promise<ITemplate> = async (data) => {
  const templateId = data.values._id;
  const response = await axios.put(`http://localhost:5000/api/template/edit/${templateId}`, data,
    {
      withCredentials: true,
    }
  );
  if (!response.data.success) {
    throw new Error('수정에 실패했습니다.');
  }
  // localStorage.setItem('edit_field', JSON.stringify(response.data.resume));
  return response.data;
};

{/* 삭제 */ }
export const deleteTemplate: (templateId: string) => Promise<ITemplate> = async (templateId) => {

  const response = await axios.delete(`http://localhost:5000/api/template/delete/${templateId}`,
    {
      withCredentials: true,
    },
  );
  if (!response.data.success) {
    throw new Error('삭제에 실패했습니다.');
  }
  return response.data;
};


{/* 한개의 템플릿만 불러오기 */ }
export const getOneTemplate: (templateId: string) => Promise<ITemplate> = async (templateId) => {
  const response = await axios.get(`http://localhost:5000/api/template/${templateId}`,
    {
      withCredentials: true,
    },
  );
  if (!response.data.success) {
    throw new Error('템플릿 불러오기에 실패했습니다.');
  }
  return response.data;
}
