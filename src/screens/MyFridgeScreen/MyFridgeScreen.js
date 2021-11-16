import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions, Modal, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Ionicons, Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { searchIngredients } from '../../utils/search';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FridgeModalText } from '../../components/modalText';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MyFridge extends React.Component {

    constructor(props) {
        super(props);
        //this.initData = mockIngredients;
        this.getData();
        this.state = {
            ingredients: [],
            foundRecipeIndexes: [],
            ingredientText: 'Add an ingredient',
            ingredientName: '',
            owned: true,
            modalVisible: false,
        };
        //this.getData();
        //this.getDataFromAsyncStorage();
        this.handleOwned = this.handleOwned.bind(this);
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
        this.handleDeleteIngredient = this.handleDeleteIngredient.bind(this);
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }


    // function to save ingredients to async storage 
    saveData = async () => {
        try {
            await AsyncStorage.setItem('ingredients', JSON.stringify(this.state.ingredients));
            this.handleSearch();
        } catch (error) {
            console.log(error.mesage);
        }

    };

    // function to get ingredients from async storage
    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('ingredients');
            if (value !== null) {
                this.setState({
                    ingredients: JSON.parse(value),
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    saveRecipeIndexes = () => {
        try {
            AsyncStorage.setItem('foundRecipeIndexes', JSON.stringify(this.state.foundRecipeIndexes));
        } catch (error) {
            console.log(error.message);
        }
    }

    // function to get foundRecipeIndexes from async storage
    getRecipeIndexes = async () => {
        try {
            const value = await AsyncStorage.getItem('foundRecipeIndexes');
            if (value !== null) {
                this.setState({
                    foundRecipeIndexes: JSON.parse(value),
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // function to run searchIngredients based on ingredients list
    handleSearch = () => {
        // map names of ingredients to list
        let ingredientList = this.state.ingredients.map(element => element.name);
        this.setState({
            foundRecipeIndexes: searchIngredients(ingredientList, 15),
        }, this.saveRecipeIndexes);
    }

    // function to save foundRecipeIndexes to async storage
    saveRecipeIndexes = () => {
        try {
            AsyncStorage.setItem('foundRecipeIndexes', JSON.stringify(this.state.foundRecipeIndexes));
        } catch (error) {
            console.log(error.message);
        }
    }

    // function to get foundRecipeIndexes from async storage
    getRecipeIndexes = async () => {
        try {
            const value = await AsyncStorage.getItem('foundRecipeIndexes');
            if (value !== null) {
                this.setState({
                    foundRecipeIndexes: JSON.parse(value),
                });

            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // function to add ingredient to state and async storage
    handleAddIngredient() {
        if (this.state.ingredientName !== "") {
            this.state.ingredients.push({
                name: this.state.ingredientName,
                owned: this.state.owned,
            });
            this.setState({
                ingredients: this.state.ingredients,
                ingredientName: '',
            }, this.saveData);
            //this.saveData();
        }
    }

    // function to remove ingredient from async storage
    handleDeleteIngredient(index) {
        this.state.ingredients.splice(index, 1);
        this.setState({
            ingredients: this.state.ingredients,
        }, this.saveData);
        //this.saveData();
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


    handleOwned = (index) => {
        // flip owned value of ingredient at index
        const newIngredients = [...this.state.ingredients];
        newIngredients[index].owned = !newIngredients[index].owned;
        this.setState({
            ingredients: newIngredients,
        }, this.saveData);


    }

    render() {
        const { modalVisible } = this.state

        return (
            <View style={styles.fridgeContainer}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible)
                    }}
                >
                    <View style={styles.modalCotainer} >
                        <View style={styles.modalView} >
                            <FridgeModalText />
                            <Pressable style={{
                                borderRadius: 20,
                                padding: 10,
                                elevation: 2
                            }}
                                onPress={() => this.setModalVisible(!modalVisible)}
                            >
                                <Text>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Text style={styles.fridgeText}>Ingredients</Text>
                    <TouchableOpacity onPress={() => this.setModalVisible(true)} >
                        <Entypo name="help-with-circle" size={25} color="black" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {this.state.ingredients.map(element => <Ingredient
                        key={element.name}
                        value={element}
                        handleOwned={() => this.handleOwned(this.state.ingredients.indexOf(element))}
                        handleDeleteIngredient={() => this.handleDeleteIngredient(this.state.ingredients.indexOf(element))}
                    />)}
                    <View style={styles.inputContainer}>
                        <Ionicons
                            style={styles.icon}
                            name="ios-add"
                            color={'tomato'}
                            onPress={this.handleAddIngredient}
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
                </ScrollView>
            </View>
        );
    }
}



class Ingredient extends React.Component {

    state = {
        element: this.props.value,
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

        return (
            <View style={styles.listContainer}>
                <CheckBox
                    value={this.state.owned}
                    tintColors={{ true: '#F15927', false: '#F15927' }}
                    onValueChange={this.handleNativeChange}
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
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    modalCotainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalText: {

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