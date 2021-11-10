import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions, Button, CheckBox } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import IngredientContext from '../../IngredientContext/IngredientContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MyFridge extends React.Component { 

    constructor(props) {
        super(props);
        //this.initData = mockIngredients;
        //this.getData();
        this.state = {
            ingredients: [],
            //ingredients: this.initData,
            ingredientText: 'Add an ingredient',
            ingredientName: '',
            owned: true,
        };
        //this.getDataFromAsyncStorage();
        this.handleOwned = this.handleOwned.bind(this);
        this.handleSetIngredient = this.handleSetIngredient.bind(this);
        this.handleDeleteIngredient = this.handleDeleteIngredient.bind(this);
    }

    handleInputFocus = () => {
        this.setState({
            ingredientText: ""
        });
    }

    handleInputBlur = () => { 
        if (this.state.ingredientName === "") {
            this.setState({
                ingredientText: "Add an ingredient"
            });
        }   
    }

    handleOnKeyPress(event) {
        if (event.key === "Enter") {
            handlePress();
         // this.setState({ inputValue: event.target.value });
        }
      }

    getDataFromAsyncStorage = async () => {
        try {
            const data = await AsyncStorage.getItem('ingredients');
            if (data === null) {
                data = this.initData;
                await AsyncStorage.setItem('ingredients', JSON.stringify(data));
                this.setState({ ingredients: data });
                return;
            }
            data = JSON.parse(data);
            this.setState({ ingredients: data });
            console.log('Data loaded successfully');
        } catch (error) {
            console.log('Error loading data:', error.message);
        }
    }

    setDataToAsyncStorage = async () => {
        try {
            let data = this.state.ingredients;
            await AsyncStorage.setItem('ingredients', JSON.stringify(data));
            console.log("Data saved to AsyncStorage");
        } catch (error) {
            console.log("Error saving data to AsyncStorage", error.message);
        }
    }


    handleSetIngredient = () => {
        console.log('button pressed!')
        const newIngredient = {
            name: this.state.ingredientName,
            owned: true,
        };
        // check if newIngredient.name does not exists in ingredients array

        if (newIngredient.name !== "") {
            // make sure that newIngredient.name does not exist in ingredients array
            if (this.state.ingredients.find(element => element.name === newIngredient.name) === undefined) {
                this.setState({
                    ingredients: [...this.state.ingredients, newIngredient],
                    ingredientName: '',
                    ingredientText: 'Add an ingredient',
                });
            }
        }
        //this.saveDataToAsyncStorage();
    }

    handleOwned = (index) => {
        // flip owned value of ingredient at index
        const newIngredients = this.state.ingredients;
        newIngredients[index].owned = !newIngredients[index].owned;
        this.setState({
            ingredients: newIngredients,
        });
        //this.saveDataToAsyncStorage();
        
    }

    // function to save data to AsyncStorage

    // handle remove ingredient
    handleDeleteIngredient = (index) => {
        const newIngredients = [...this.state.ingredients];
        //console.log(index);
        //console.log(newIngredients[index]);
        newIngredients.splice(index, 1);
        this.setState({
            ingredients: newIngredients
        });
        console.log('new ingredients', newIngredients);
        console.log('updated ingredients: ', this.state.ingredients);
        //this.saveDataToAsyncStorage();
    }

    // method to submit on pressing enter on mobile keyboard
    // handleSubmitEditing(event) {
    //     if (event.key === "Enter") {
    //         this.handleSetIngredient();
    //     }
    // }


    handleGet = () => {
        this.getDataFromAsyncStorage();
    }

    render() {

        return (
            <View style={styles.fridgeContainer}>
                <ScrollView>
                <Text style={styles.fridgeText}>Ingredients</Text>
                { this.state.ingredients.map( element => <Ingredient 
                    key={element.name}
                    value={element}
                    handleOwned={() => this.handleOwned(this.state.ingredients.indexOf(element))}
                    handleSetIngredient={this.handleSetIngredient}
                    handleDeleteIngredient={() => this.handleDeleteIngredient(this.state.ingredients.indexOf(element))} 
                /> )}
                <View style={styles.inputContainer}>
                    <Ionicons 
                        style={styles.icon} 
                        name="ios-add" 
                        color={'tomato'} 
                        onPress={this.handleSetIngredient}
                        //onKeyPress={this.handleOnKeyPress} 
                    />
                    <TextInput 
                        style={styles.underline}
                        onFocus={this.handleInputFocus}
                        onBlur={this.handleInputBlur}
                        onSubmitEditing={this.handleSetIngredient}
                        onChangeText={(text) => this.setState({ ingredientName: text })}
                        autoComplete={true}
                    >{this.state.ingredientText}</TextInput>  
                </View>
                {/* <Button title="Get!" onPress={this.handleGet}/> */}
                </ScrollView>
            </View>
        );
    }
}

class Ingredient extends React.Component {

    state = {
        element : this.props.value,
        ingredientName: this.props.value.name,
        owned: this.props.value.owned,
    }


     constructor(props) {
        super(props);
    } 


    render() {

        return(
            <View style={styles.listContainer}> 
                <CheckBox 
                    value={this.state.owned}
                    tintColors={{ true: '#F15927', false: 'black' }}
                    onPress={this.props.handleOwned}
                    //onpress={() => this.setState({owned: !this.state.owned})}
                />
                <Text style={styles.textContainer}>{this.state.ingredientName}</Text>
                <Ionicons onPress={this.props.handleDeleteIngredient} style={styles.icon} name="trash" color={'tomato'} />
            </View>
        );
    }
} 

// React component Ingredient that takes an onPress method and ingrediont information into
// the constructor

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
        resizeMode: 'contain',
        elevation: 7,
        overflow: 'hidden',   
    },
    fridgeText: {
        paddingTop: '3%',
        paddingBottom: '5%',
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
        //paddingTop: '1%',
        paddingLeft: '2%', 
    },
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        paddingLeft: '2%',
        fontSize: 20,
    },
    listContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    textContainer: {
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
        paddingTop: '1%',
        paddingLeft: '5%',
        fontSize: 20,
    },
})


export default MyFridge;