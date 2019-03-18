import React, { Component } from 'react';
import { Card, Button, Icon } from 'react-native-elements';

export default class ProjectCard extends Component {
    render() {

        return (
            <Card
                title={this.props.project.name}
                image={require('../images/death.jpeg')}>
                
                <Button
                    transparent
                    raised

                    // icon={<Icon name='code' color='#123456' />}
                    backgroundColor='#000000'
                    onPress={this.props.Navigate}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='View Project' />
            </Card>
        )
    }
}