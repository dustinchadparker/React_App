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
    // gravity.covalence.io/api/graduation/projects

    async componentDidMount() {
        let projects = await this.fetchProjects();
        this.setState({ projects });


    }

    async fetchProjects() {
        try {
            let result = await fetch({ url: 'https://ghibliapi.herokuapp.com/films' });
            let projects = await result.json();
            return projects;
        } catch (e) {
            console.log(e);
            return e;
        }

    }

    navigate(project) {
        this.props.navigation.navigate('ProjectTab', { project });

    }

    render() {

        return (
            <ScrollView style={styles.container}>
                {this.state.projects.map((project) => {
                    return (<ProjectCard key={project.id} project={project}
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