import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SingUpComponent from './components/pages/loginPage/signUp/SignUp'


const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        {/* 헤더 컴포넌트 자리*/}
        
        <Switch>
          {/* 컨테이너 자리? */}
          <Route exact path="/" component={SingUpComponent} />
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

// interface Hello {
//   compiler: string;
//   framework: string;
// }

// export class App extends React.Component<Hello, {}> {
//   render() {
//     return (
//       <h1>
//         Hello from {this.props.compiler} and {this.props.framework}!
//       </h1>
//     );
//   }
// }
export default App;