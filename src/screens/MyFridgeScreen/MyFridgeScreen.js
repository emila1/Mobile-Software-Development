import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MealStyles } from '../../styles/global';
import { Ionicons, AntDesign } from '@expo/vector-icons'

export default class MyFridge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fridgeItems: ['Chicken', 'Beef'],
            value: ''
        };
    }
    onChangeValue = event => {
        this.setState({ value: event.nativeEvent.text });
    };

    onAddItem = () => {
        if (this.state.value != '') {

            this.setState(state => {
                const fridgeItems = state.fridgeItems.concat(state.value);

                return {
                    fridgeItems,
                    value: '',
                };
            });
        }
    };

    onRemoveItem = i => {
        this.setState(state => {
            const fridgeItems = state.fridgeItems.filter((item, j) => i !== j);

            return {
                fridgeItems,
            };
        });
    };

    render() {
        console.log(this.state)
        return (

            <View style={MealStyles.fridgeContainer} >
                <Text style={MealStyles.green} > MyFridgeScreen </Text>
                <View style={MealStyles.fridgeInputContainer}>
                    <TextInput style={MealStyles.fridgeInput}
                        placeholder='Add an item to your fridge'
                        value={this.state.value}
                        onChange={this.onChangeValue.bind(this)} />
                    <TouchableOpacity onPress={() => this.onAddItem()} >
                        <AntDesign name='pluscircle' size={30} color={'green'} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {this.state.fridgeItems.map((item, index) =>
                        <View style={MealStyles.fridgeItem} key={index} >
                            <Text style={{ textAlign: 'left', fontSize: 20 }}  >{item}</Text>
                            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.onRemoveItem(index)} >
                                <Ionicons name='ios-trash-sharp' size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView>
            </View>
        );
    }
}
