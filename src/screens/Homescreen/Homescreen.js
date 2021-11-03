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
        const prop = this.props.navigation.navigate

        return (
            <View style={MealStyles.container}>
                <Text style={MealStyles.green}>MealMe</Text>
                <Text style={MealStyles.pink}>Your Health and Time are important for us</Text>
                <Text style={MealStyles.gold}>Start to find some good recipes or try out "Surprise me!"</Text>

                <View style={MealStyles.mealButtons}>
                    <View style={MealStyles.alignMe1}>
                        <Button style={MealStyles.button} title="Find recipes" onPress={() => prop('Recipe')} />
                    </View>

                    <View style={MealStyles.alignMe1}>
                        <Button style={MealStyles.button} title="Surprise me!" onPress={() => prop('Recipe')} />
                    </View>

                    <View style={MealStyles.alignMe1}>
                        <Button style={MealStyles.button} title="My Fridge" onPress={() => prop('MyFridge')} />
                    </View>
                </View>

            </View>
        );
    }
}


