import * as React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
{/* Containers */ }
import LoginPageContainer from './containers/pages/loginPage/logIn/LoginPageContainer';
import SignUpContainer from './containers/pages/loginPage/signUp/SignUpContainer';
import Template from './containers/pages/templatePage/TemplatePageContainer';

{/* Components 화면 확인용 import */ }
import MyPageComponent from './components/pages/myPage/MyPage';
import HeaderComponent from './components/systems/header/Header';

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        {/* 로그인여부 확인해서 Header조건부 랜더링 하기 */}
        <HeaderComponent />
        <Switch>
          {/* 컨테이너 자리? */}
          <Route exact path="/" component={LoginPageContainer} ></Route>
          <Route exact path="/template" component={Template} ></Route>
          <Route exact path="/signup" component={SignUpContainer} ></Route>
          <Route exact path="/mypage" component={MyPageComponent} ></Route>
          {/* <Route exact path="/" component={LandingPageContainer} />
          <Route path={['/write', '/edit/:']} component={WritePageContainer} />
          <Route path="/ask" component={AskPageContainer} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
