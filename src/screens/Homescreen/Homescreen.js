import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealStyles } from '../../styles/global';

export default class MealMeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        
    }
    render() {
        return (
            <View style={MealStyles.container}>
                <Text style={MealStyles.green}>MealMe</Text>
                <Text style={MealStyles.pink}>Your Health and Time are important for us</Text>
                <Text style={MealStyles.gold}>Explore recipes, manage your fridge or get inspired!</Text>
            </View>
        );
    }
}
