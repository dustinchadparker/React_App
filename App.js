
import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProjectTabScreen from './screens/ProjectTabScreen';

const RootNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  ProjectTab: { screen: ProjectTabScreen }
}, {
    initialRouteName: 'Home'
  });

const AppContainer = createAppContainer(RootNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}

