import * as React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

{/* Containers */ }
import LoginPageContainer from './containers/pages/loginPage/logIn/LoginPageContainer';
import SignUpContainer from './containers/pages/loginPage/signUp/SignUpContainer';
import MyPageContainer from './containers/pages/myPage/MyPageContainer';
import TemplateContainer from './containers/pages/templatePage/TemplatePageContainer'
import ApplicantContainer from './containers/pages/writePage/applicant/ApplicantContainer';

{/* Components 화면 확인용 import */ }
import HeaderComponent from './components/systems/header/Header';
import WritePageComponent from './components/pages/writePage/WritePage'
// import RightPreviewComponent from './components/pages/writePage/rightPreview/RightPreview'
// import Applicant from './components/pages/writePage/write/applicant/Applicant';


const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        {/* 로그인여부 확인해서 Header조건부 랜더링 하기 */}
        <HeaderComponent />
        <Switch>
          {/* 컨테이너 자리? */}
          <Route exact path="/" component={LoginPageContainer} ></Route>
          <Route exact path="/template" component={TemplateContainer} ></Route>
          <Route exact path="/signup" component={SignUpContainer} ></Route>
          <Route exact path="/mypage" component={MyPageContainer} ></Route>
          <Route exact path="/addtemplate" component={WritePageComponent} />
          {/* <Route exact path="/rightpreview" component={RightPreviewComponent} /> */}
          <Route exact path="/write" component={ApplicantContainer} ></Route>
          {/* <Route exact path="/" component={LandingPageContainer} />
          <Route path={['/write', '/edit/:']} component={WritePageContainer} />
          <Route path="/ask" component={AskPageContainer} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
