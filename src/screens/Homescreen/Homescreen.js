import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Homescreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>

                <Text> Homescreen </Text>
                <Button title="Go to recipe" onPress={() => this.props.navigation.navigate("Recipe")} />
            </View>
        );
    }
}
