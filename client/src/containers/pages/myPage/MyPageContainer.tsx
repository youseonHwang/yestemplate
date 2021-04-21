import * as React from 'react';
import { useEffect, useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { ITemplate } from '../../../api/mypage';

{/* api */ }
import getMyPageInfo from '../../../api/mypage';

{/* components */ }
import MyPageComponent from '../../../components/pages/myPage/MyPage'

const MyPageContainer: React.FC<RouteComponentProps> = () => {

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

  console.log(templates) //promise인 상태..

  return (
    <MyPageComponent templates={templates} />
  )
}

export default withRouter(MyPageContainer);