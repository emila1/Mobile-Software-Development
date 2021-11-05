import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MealStyles } from '../../styles/global'

export default class ShoppingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={MealStyles.ShoppingViewContainer}>
                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }} >Access your Fridge inventory or your shopping list </Text>
                <View style={MealStyles.ButtonContainer} >
                    <View style={MealStyles.ShoppingButton} >
                        <TouchableOpacity style={{ height: '100%', width: '100%' }} onPress={() => this.props.navigation.navigate("Your Inventory")} >
                            <Text style={MealStyles.ShoppingButtonText} >My Fridge</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={MealStyles.ShoppingButton} >
                        <TouchableOpacity style={{ height: '100%', width: '100%' }} onPress={() => Alert.alert("Navigating to Shopping List")} >
                            <Text style={MealStyles.ShoppingButtonText} >Shopping List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
