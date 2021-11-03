import * as React from 'react';
import { Text, View, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealStyles } from '../../styles/global';



export default class MealMeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={MealStyles.container}>
                <Text style={MealStyles.green}>MealMe</Text>
                <Text style={MealStyles.pink}>Your Health and Time are important for us</Text>
                <Text style={MealStyles.gold}>Start to find some good recipes. The surprise ME will surprise you</Text>

                <View style={MealStyles.mealButtons}>
                    <TouchableOpacity style={MealStyles.alignMe1} title="-Find- Recipes" onPress={() => this.props.navigation.navigate('Recipe')}>
                    <Text style={MealStyles.buttonMeal} alignContent='center'>- Find - Recipes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={MealStyles.alignMe1} title="Surprise -ME-" onPress={() => this.props.navigation.navigate('Recipe')}>
                    <Text style={MealStyles.buttonMeal} alignContent='center'>Surprise   ---ME---</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={MealStyles.alignMe1} title="-My- Fridge" onPress={() => this.props.navigation.navigate('MyFridge')}>
                    <Text style={MealStyles.buttonMeal}>--My-- Fridge-</Text>
                    </TouchableOpacity>

                </View>

                <View style={MealStyles.cardWrapper}>
                    <Text>DINNERS</Text>
                        <View style={MealStyles.card}></View>
                        <View style={MealStyles.cardImagewrap}>
                            <Image style={MealStyles.cardImg} source={{uri: 'https://www.online-tech-tips.com/wp-content/uploads/2021/09/vegan1.jpg'}}/>
                            <Text style={MealStyles.cardText}>Chicken and patato mix</Text>
                        </View>
                </View>

            </View>
        );
    }
}


