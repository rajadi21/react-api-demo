import './App.css';
import Login from './component/Login';
import React from 'react';
import Home from './component/Home';

class App extends React.Component {

  state = { isLogin: false };

  isLoginCallback = (data) => {
    this.setState({ isLogin: data });
  }

  render() {
    console.log(this.state.isLogin)
    return (
      <div>
        {this.state.isLogin ? <Home /> : <Login isLoginCallback={this.isLoginCallback} />}
      </div>
    );
  }
}

export default App;
