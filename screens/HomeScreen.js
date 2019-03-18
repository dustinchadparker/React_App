import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ProjectCard from '../components/ProjectCard';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: "Covalence Projects"
    }

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.setState({
            projects: [
                { name: 'Test Project 1', description: 'CoolProject' },
                { name: 'Test Project 2', description: 'CoolProject' },
                { name: 'Test Project 3', description: 'CoolProject' },
                { name: 'Test Project 4', description: 'CoolProject' },
            ]
        })
    }

    navigate(project) {
        this.props.navigation.navigate('ProjectDetail', { project });

    }

    render() {

        return (
            <ScrollView style={styles.container}>
                {this.state.projects.map((project, index) => {
                    return (<ProjectCard key={index} project={project}
                        Navigate={() => { this.navigate(project) }}></ProjectCard>
                    )
                })}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
    }
})