import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MealStyles } from '../../styles/global';

export default class FavoritesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={MealStyles.container}>
                <Text style={MealStyles.green}> FavoritesScreen </Text>
            </View>
        );
    }
}
