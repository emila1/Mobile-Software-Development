import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { MealStyles } from '../../styles/global';

function RecipeScreen() {
    return (
        <View style={MealStyles.cardContainer}>
            <Text style={MealStyles.green}>Recipe</Text>
        </View>
    );
}


export default RecipeScreen;
