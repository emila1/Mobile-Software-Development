import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions, StatusBar,TouchableOpacity, Alert, SectionList, Modal } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import IngredientContext from '../../IngredientContext/IngredientContext';
import Ingredient from '../../components/ingredient';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class MyFridge extends React.Component { 
    
    handleInputFocus = () => {
        this.setState({
            ingredientText: ""
        });
    }

    handleInputBlur = () => {
        // If input text is empty, reset the state to the default
        if (this.state.enterIngredient === "") {
            this.setState({
                ingredientText: "Add an ingredient"
        });
    }}


    static contextType = IngredientContext;
    state = {
        input: this.context,
        ingredientText: 'Add an ingredient',
        enterIngredient: ''
    };

    render() {

        return (
            <View style={styles.fridgeContainer}>
                <Text style={styles.fridgeText}>Ingredients</Text>
                { this.state.input.map( element => <Ingredient key={this.state.input.indexOf(element)} value={element} /> )}
                <TextInput 
                    style={styles.underline}
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}
                    // onEnterKey={this.handleEnterKey}
                    onChangeText={(text) => this.setState({ enterIngredient: text })}
                    autoComplete={true}
                >{this.state.ingredientText}</TextInput>  
            </View>
        );
    }
}

const styles = StyleSheet.create({  
    container: {
        paddingTop: '10%',
        paddingLeft: '2%',
        paddingRight: 10,
    },
    fridgeContainer: {
        width: windowWidth * .9,
        height: windowHeight * .9,
        marginLeft: '5%',
        marginTop: '10%',
       // backgroundColor: 'orange',
        resizeMode: 'contain',
      //  borderColor: '#007060',         // Same color as backgroundColor
      //  borderRadius: 20,
      //  shadowColor: "black",
        elevation: 7,
        overflow: 'hidden',   
    },
    fridgeText: {
        paddingTop: '3%',
        paddingBottom: '5%',
        //paddingLeft: '2%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
    fridgeTouchable: {
        alignSelf: 'center',
    },
    fridgeModalView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(100,100,100, 0.5)',
        padding: 20,
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // marginTop: 22,
    },
    fridgeInputModal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row'
    },
    fridgeInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: '80%',
    },
    fridgeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth,
    },
    fridgeInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth,
        padding: 6,
        justifyContent: 'center',
        margin: 4,
    },
    underline: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        paddingTop: '1%',
        paddingLeft: '10%',
    }
})


export default MyFridge;