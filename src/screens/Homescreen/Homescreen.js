import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { getRandomRecipe, searchIngredients } from '../../utils/search'
import { MealStyles } from '../../styles/global'

export default class Homescreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(this.state.randomRecipes)
        return (
            <View style={MealStyles.container}>
                <View>
                    <Image source={require('../../../assets/splash.png')} style={{ resizeMode: "contain", width: 250, height: 250 }} />
                </View>

                <Text style={MealStyles.red}>Keep your meal up to date......</Text>
                <Text style={MealStyles.blue}>. . . .</Text>

                <View style={MealStyles.buttonGuest}>
                    <Button style={MealStyles.buttonStyle} title="Sign in" />
                </View>

                <View style={MealStyles.buttonGuest}>
                    <Button style={MealStyles.buttonStyle} title="Continue as guest" onPress={() => this.props.navigation.navigate('MealMe')} />
                </View>

                <View style={MealStyles.buttonCreat}>
                    <Button style={MealStyles.buttonStyle} onPress={() => alert("Try guest acount")} title="Create an account" />
                </View>

            </View>
        );
    }
}

