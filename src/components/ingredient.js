import React from 'react';
import { StyleSheet, Dimensions, Text, TextInput,View, Image } from 'react-native';
import IngredientContext from '../IngredientContext/IngredientContext';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;

class Ingredient extends React.Component {
    static contextType = IngredientContext;
    
    render() {
        const input = this.context;

        return(
            <View style={styles.listContainer}> 
                {input.map( element => <Text>{element.name}</Text>)}
                <TextInput>Input item here</TextInput> 

            </View>
        );
    }
}

const styles = StyleSheet.create({  
    listContainer: {
        width: screenWidth * .90,
        height: windowHeight * 0.25,
        marginLeft: '2%',
        marginTop: '5%',
        paddingTop: '5%',
        backgroundColor: 'orange',
        resizeMode: 'contain',
        borderColor: '#007060',         // Same color as backgroundColor
        borderRadius: 20,
        shadowColor: "black",
        elevation: 7,
        overflow: 'hidden',     
    // Android only, needs ios support https://stackoverflow.com/questions/55015715/react-native-drop-shadow
    },
    textContainer: {
        paddingTop: '3%',
        paddingLeft: '5%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
    listText: {

    }
});

export default Ingredient;
