import * as React from 'react';
import { useEffect, useState } from 'react'
import { ITemplate } from '../../../api/mypage';
{/* api */ }
import getMyPageInfo from '../../../api/mypage';
{/* components */ }
import MyPageComponent from '../../../components/pages/myPage/MyPage'
export default function MyPageContainer() {
  const [templates, setTemplates] = useState(Array<ITemplate>())
  useEffect(() => {
    const getTemplates = async () => {
      try {
        const result = await getMyPageInfo({ _id: '607e3447f3990d3b44758e15' })
        setTemplates(result)
      } catch (err) {
        console.log(err)
      }
    };
    getTemplates()
  }, [])
  return (
    <MyPageComponent templates={templates} />
  )
}