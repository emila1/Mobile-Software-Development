import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { MealStyles } from '../../styles/global';

export default class RecipeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
        <View style={MealStyles.container}>
            <Text style={MealStyles.green}>Recipe</Text>
        </View>
        );
    }
}