import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { MealStyles } from '../../styles/global.js';

export default class SettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
        <View style={MealStyles.container}>
            <Text style={MealStyles.green}>Settings</Text>
        </View>
        );
    }
}