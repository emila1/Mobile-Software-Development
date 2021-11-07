import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions, StatusBar,TouchableOpacity, Alert, SectionList, Modal } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { IngredientProvider } from '../../IngredientContext/IngredientContext';
import Ingredient from '../../components/ingredient';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//let list = ["onion", "aubergine", "milk", "butter", "spaghetti", "oil"];
//const ingredient = { name: 'onion', amount: 3, owned: true } 

class MyFridge extends React.Component { 
    render() {

        return (
            <View style={styles.fridgeContainer}>
                <Text style={styles.fridgeText}>Ingredients</Text>
                <Ingredient />
            </View>
        );
    }
}

const styles = StyleSheet.create({  
    fridgeContainer: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    fridgeText: {
        paddingTop: '3%',
        paddingLeft: '2%',
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
})


export default MyFridge;