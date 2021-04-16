import * as React from 'react';
import Login from './components/pages/loginPage/logIn/Login';
 
interface Hello {
  compiler: string;
  framework: string;
}
 
export class App extends React.Component<Hello, {}> {
  render() {
    return (
      <>
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
        <Login />
      </>
    );
  }
}