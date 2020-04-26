import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import Splash from './components/SplashScreen';
import Main from './components/Main';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };

    setTimeout(()=>{

      this.setState({ isLoading: false })
    }, 3000)
  }
  render() {
    if (this.state.isLoading) {
      return <Splash />;
    } else {
      return <Main />; 
    }
  };
}


