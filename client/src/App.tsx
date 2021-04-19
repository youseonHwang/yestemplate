import * as React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPageContainer from './containers/pages/loginPage/LoginPageContainer';
import SignUpContainer from './containers/pages/loginPage/signUp/SignUpContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        {/* 헤더 컨테이너*/}
        <Switch>
          {/* 컨테이너 자리? */}
          <Route exact path="/signup" component={SignUpContainer} ></Route>
          <Route exact path="/" component={LoginPageContainer} ></Route>
          {/* <Route exact path="/" component={LandingPageContainer} />
          <Route path="/template" component={TemplatePageContainer} />
          <Route path={['/write', '/edit/:']} component={WritePageContainer} />
          <Route path="/mypage" component={MypageContainer} />
          <Route path="/ask" component={AskPageContainer} /> */}
        </Switch>
      </Router>
    </div>
    );
};

export default App;
