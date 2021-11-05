import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
//import { MealStyles } from '../styles/global.js';
import recipes from '../../recipes/recipes.json';
import { Ionicons } from '@expo/vector-icons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;


const recipe = recipes;
const ind = 30;                // Manual input for recipe index. 
class RecipeCard extends React.Component {
    
    // Get recipe info here. 

    render() { 
        return (
        <View style={styles.cardContainer}>
            <Image 
                style={styles.image}
                source={{uri: recipe[ind].image_urls[0]}}/>
            <View
                style={styles.textContainer}
            >
                <Text numberOfLines={2} style={styles.titleText}>{recipe[ind].title}</Text>

                <View style={styles.headTextContainer}>
                    <Ionicons name={'time'} color={'tomato'} />
                    <Text style={styles.headText}>{recipe[ind].head[0]}</Text>
                    <Ionicons name={'hourglass'} color={'tomato'} />
                    <Text style={styles.headText}>{recipe[ind].head[1]}</Text>
                    <Ionicons name={'people'} color={'tomato'} />
                    <Text style={styles.headText}>{recipe[ind].head[2]}</Text>
                    <Ionicons name={'book'} color={'tomato'} />
                    <Text style={styles.headText}>{recipe[ind].head[3]}</Text>
                </View>

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
        borderColor: '#007060',         // Same color as backgroundColor
        borderRadius: 20,
        shadowColor: "black",
        elevation: 7,
        overflow: 'hidden',     
    // Android only, needs ios support https://stackoverflow.com/questions/55015715/react-native-drop-shadow
    },
    textContainer: {
        backgroundColor: '#fff',
        position: 'absolute',
        paddingLeft: '10%',
        paddingRight: '10%',
        height: windowHeight * 0.25 * 0.35,
        width: windowWidth * 0.7,
        bottom: 0,
    },
    headTextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        paddingRight: '10%',
    },
    titleText: {
        color:'black',
        fontWeight: 'bold',
        fontSize: 17,

        bottom: 0,
        left: 0,
    },
    headText: {

        color:'black',
        fontSize: 10,
    },
    image: {
        height: windowHeight * 0.25,
    }

})
 
export default RecipeCard;
