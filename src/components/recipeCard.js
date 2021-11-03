import * as React from 'react';
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
            source={require('../../recipes/full/05d3e52c89cd3866e6f0ba331e8580474703ef81.jpg')}/>
            <View
                style={styles.textContainer}
            >
            <Text style={styles.tmpText}>Recipe Card!</Text>
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({  // Temporary styling, move to global stylesheet
    cardContainer: {
        margin: windowWidth * 0.02,
        width: windowWidth * 0.7,
        height: windowHeight * 0.25,
        resizeMode: 'contain',
        backgroundColor: '#007060',
        borderColor: '#007060',         // Same color as backgroundColor
        borderRadius: 20,
        shadowColor: "black",
        elevation: 7,
        overflow: 'hidden',        
    // Android only, needs ios support https://stackoverflow.com/questions/55015715/react-native-drop-shadow
    },
    textContainer: {
        backgroundColor: '#fff',
        textAlign: 'left',
        justifyContent: 'center',
    },
    tmpText: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        justifyContent: 'center',
        resizeMode: 'contain',
        width: windowWidth * 0.7,
    }

})
 
export default RecipeCard;
