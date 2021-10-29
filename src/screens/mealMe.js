import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealStyles } from '../styles/global.js';


function MealMeScreen({ navigation }) {
    return (
        <View style={MealStyles.container}>
            <Text style={MealStyles.green}>MealMe</Text>
            <Text style={MealStyles.pink}>Your Health and Time are important for us</Text>
            <Text style={MealStyles.gold}>Start to find some good recipes. The surprise ME will surprise you</Text>

            <View style={MealStyles.mealButtons}>
                <View style={MealStyles.alignMe1}>
                    <Button style={MealStyles.button} title="-Find- Recipes" onPress={() => navigation.navigate('Recipe')} />
                </View>

                <View style={MealStyles.alignMe1}>
                    <Button style={MealStyles.button} title="Surprise -ME-" onPress={() => navigation.navigate('SurpriseMe')} />
                </View>

                <View style={MealStyles.alignMe1}>
                    <Button style={MealStyles.button} title="-My- Fridge" onPress={() => navigation.navigate('MyFridge')} />
                </View>
            </View>

        </View>
    );
}


export default MealMeScreen;

