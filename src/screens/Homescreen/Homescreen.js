import React from 'react';
import { Text, View, Image, Button, StyleSheet, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealStyles } from '../../styles/global';
import RecipeCard from '../../components/recipeCard'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={MealStyles.container}>
                {/*<Text style={MealStyles.green}>MealMe</Text> */}
                {/*} <Text style={MealStyles.pink}>Your Health and Time are important for us</Text> */}
                {/* <Text style={MealStyles.gold}>Start to find some good recipes. The surprise ME will surprise you</Text> */}

                {/*} <View style={MealStyles.mealButtons}> 
                    <View style={MealStyles.alignMe1}>
                        <Button style={MealStyles.button} title="Recipes" onPress={() => this.props.navigation.navigate('Recipe')} /> 
                    </View>

                    <View style={MealStyles.alignMe1}>
                        <Button style={MealStyles.button} title="Surprise Me" onPress={() => this.props.navigation.navigate('Recipe')} /> 
                    </View>

                    <View style={MealStyles.alignMe1}>
                        <Button style={MealStyles.button} title="MyFridge" onPress={() => this.props.navigation.navigate('MyFridge')} />
                    </View>
        </View> */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <Text
                        style={MealStyles.cardScrollerText}
                    >Your recipes</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </ScrollView>

                    <Text style={MealStyles.cardScrollerText}>Recommended recipes</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </ScrollView>

                    <Text
                        style={MealStyles.cardScrollerText}
                    >
                        Random recipes
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </ScrollView>

                </ScrollView>
            </View>
        );
    }
}
