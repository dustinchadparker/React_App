import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ProjectDetailScreen from './ProjectDetailScreen';
import ProjectStudentsScreen from './ProjectStudentsScreen';


const TabNavigation = createBottomTabNavigator({
    ProjectDetail: { screen: ProjectDetailScreen },
    StudentScreen: { screen: ProjectStudentsScreen },
});

const AppContainer = createAppContainer(TabNavigation);

export default class ProjectTabScreen extends Component {
    static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.project.director })

    render() {
        return (
            <AppContainer screenProps={{ project: this.props.navigation.state.params.project }} />
        )
    }
}
