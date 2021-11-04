import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import { MealStyles } from '../styles/global.js';
import recipes from '../../recipes/recipes.json'
import { DrawerItem } from '@react-navigation/drawer';


class RecipeCard extends React.Component {
    render() { 
        return (
        <View style={MealStyles.cardContainer}>
            <Image style={MealStyles.imageCard} source={require('../../recipes/full/0e27521d6c4b5484ac16560c0ad226a229cac3c9.jpg')}/>
            <Text style={MealStyles.tmpText}>Chicken and patato</Text>
        </View>
        );
    }
}


     
export default RecipeCard;
