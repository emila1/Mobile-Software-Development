import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
//import { MealStyles } from '../styles/global.js';
import recipes from '../../recipes/recipes.json'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

class RecipeCard extends React.Component {
    render() { 
        return (
        <View style={styles.cardContainer}>
            <Image 
            style={styles.image}
            source={require('../../recipes/full/0e27521d6c4b5484ac16560c0ad226a229cac3c9.jpg')}/>
            <Text style={styles.tmpText}>Recipe Card!</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({  // Temporary styling, move to global stylesheet
    cardContainer: {
        margin: windowWidth * 0.02,
        width: windowWidth * 0.7,
        height: windowHeight * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007060',
        borderStyle: 'solid',
        borderColor: '#007060',         // Same color as backgroundColor
        borderWidth: 2,
        borderRadius: 20,
        shadowColor: "black",
        elevation: 7            // Android only, needs ios support https://stackoverflow.com/questions/55015715/react-native-drop-shadow
    },
    tmpText: {
    },

    image: {
        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'contain',
        width: 200,
    }

})
 
export default RecipeCard;
