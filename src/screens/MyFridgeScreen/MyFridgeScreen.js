import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
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

/*     setDataToAsyncStorage = async () => {
        try {
            let data = this.state.ingredients;
            await AsyncStorage.setItem('ingredients', JSON.stringify(data));
            console.log("Data saved to AsyncStorage");
        } catch (error) {
            console.log("Error saving data to AsyncStorage", error.message);
        }
    }
 */
    // function to save ingredients data to AsyncStorage
    handleSetData = async () => {
        try {
            let data = this.state.ingredients;
            await AsyncStorage.setItem('ingredients', JSON.stringify(data));
            console.log("Data saved to AsyncStorage");
        } catch (error) {
            console.log("Error saving data to AsyncStorage", error.message);
        }
    }


    handleAddIngredient = () => {
        const newIngredient = {
            name: this.state.ingredientName,
            owned: true,
        };

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
        const newIngredients = [...this.state.ingredients];
        console.log("Name of ingredient", newIngredients[index].name);
        console.log("Owned before:", newIngredients[index].owned);
        newIngredients[index].owned = !newIngredients[index].owned;
        this.setState({
            ingredients: newIngredients,
        });
        console.log("Owned after", newIngredients[index].owned);
        //this.saveDataToAsyncStorage();
    }

    // handle remove ingredient
    handleDeleteIngredient = (index) => {
        const newIngredients = [...this.state.ingredients];
        newIngredients.splice(index, 1);
        this.setState({
            ingredients: newIngredients
        });
        //this.saveDataToAsyncStorage();
    }

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
                    //handleAddIngredient={this.handleAddIngredient}
                    handleDeleteIngredient={() => this.handleDeleteIngredient(this.state.ingredients.indexOf(element))} 
                /> )}
                <View style={styles.inputContainer}>
                    <Ionicons 
                        style={styles.icon} 
                        name="ios-add" 
                        color={'tomato'} 
                        onPress={this.handleAddIngredient}
                        //onKeyPress={this.handleOnKeyPress} 
                    />
                    <TextInput 
                        style={styles.underline}
                        onFocus={this.handleInputFocus}
                        onBlur={this.handleInputBlur}
                        onSubmitEditing={this.handleAddIngredient}
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

    handleNativeChange = () => {
        this.setState({
            owned: !this.state.owned,
        });
        this.props.handleOwned();
    }

    render() {

        return(
            <View style={styles.listContainer}> 
                <CheckBox 
                    value={this.state.owned}
                    tintColors={{ true: '#F15927', false: '#F15927' }}
                    // change value of CheckBox 
                    onValueChange={this.handleNativeChange}
                    //onChange={this.props.handleOwned}
                    //onChange={this.props.handleOwned}
                />
                <Text style={styles.textContainer}>{this.state.ingredientName}</Text>
                <Ionicons onPress={this.props.handleDeleteIngredient} style={styles.icon} name="trash" color={'tomato'} />
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