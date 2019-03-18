
import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProjectDetailScreen from './screens/ProjectDetailScreen';

const RootNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  ProjectDetail: { screen: ProjectDetailScreen }
}, {
    initialRouteName: 'Home'
  });

const AppContainer = createAppContainer(RootNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}

