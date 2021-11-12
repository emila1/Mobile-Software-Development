import React, { Component, useContext } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { getRandomRecipe, searchIngredients } from '../../utils/search'
import { MealStyles } from '../../styles/global'
import { AuthContext } from '../../AuthContext/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StartScreen() {

    const { signInGuest } = useContext(AuthContext)

    return (
        <View style={MealStyles.container, { alignItems: 'center', alignSelf: 'center' }}>
            <View style={{ flex: 0.8 }} >
                <Image source={require('../../../assets/salmon.jpg')} style={{ resizeMode: "contain", height: '70%', top: '20%', borderRadius: 12 }} />
            </View>

            <Text style={MealStyles.red}>Sign in, or try out the app as guest!</Text>
            <Text style={MealStyles.blue}>. . . . .</Text>

            {/* <View style={MealStyles.buttonGuest}>
                <Button style={MealStyles.buttonStyle} title="Sign in" onPress={() => alert("Pretending to navigate to a login screen")} />
            </View> */}
            <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => alert("Pretending to navigate to a login screen")} >
                <Text style={MealStyles.buttonGuestText} >SIGN IN</Text>
            </TouchableOpacity>

            {/* <View style={MealStyles.buttonGuest}>
                <Button style={MealStyles.buttonStyle} title="Continue as guest" onPress={() => signInGuest()} />
            </View> */}
            <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => signInGuest()} >
                <Text style={MealStyles.buttonGuestText} >CONTINUE AS GUEST</Text>
            </TouchableOpacity>

            <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => alert("Try guest acount")} >
                <Text style={MealStyles.buttonGuestText} >CREATE AN ACCOUNT</Text>
            </TouchableOpacity>

            {/* <View style={MealStyles.buttonGuest}>
                <Button style={MealStyles.buttonStyle} onPress={() => alert("Try guest acount")} title="Create an account" />
            </View> */}

        </View>
    );
}
