import React, { Component, useContext } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { getRandomRecipe, searchIngredients } from '../../utils/search'
import { MealStyles } from '../../styles/global'
import { AuthContext } from '../../AuthContext/AuthContext';

export default function StartScreen() {
    
    const { signInGuest } = useContext(AuthContext)

    return (
        <View style={MealStyles.container}>
            <View>
                <Image source={require('../../../assets/splash.png')} style={{ resizeMode: "contain", width: 250, height: 250 }} />
            </View>

            <Text style={MealStyles.red}>Sign in, or try out the app as guest!</Text>
            <Text style={MealStyles.blue}>. . . . .</Text>

            <View style={MealStyles.buttonGuest}>
                <Button style={MealStyles.buttonStyle} title="Sign in" />
            </View>

            <View style={MealStyles.buttonGuest}>
                <Button style={MealStyles.buttonStyle} title="Continue as guest" onPress={() => signInGuest()} />
            </View>

            <View style={MealStyles.buttonCreat}>
                <Button style={MealStyles.buttonStyle} onPress={() => alert("Try guest acount")} title="Create an account" />
            </View>

        </View>
    );
}
