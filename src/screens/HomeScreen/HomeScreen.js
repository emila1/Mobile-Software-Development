import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeCard from '../../components/recipeCard'
import { getRandomRecipe, searchIngredients } from '../../utils/search';

let list = ["onion", "aubergine", "milk", "butter", "spaghetti", "oil"]; // Development list
export default class HomeScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            foundRecipes: searchIngredients(list, 6),
            randomRecipes: getRandomRecipe(6),
        };
    }
    render() {
        return (

            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <Text
                        style={styles.cardScrollerText}
                    >Your recipes</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <RecipeCard value={this.state.foundRecipes[0]}/>
                        <RecipeCard value={this.state.foundRecipes[1]}/>
                        <RecipeCard value={this.state.foundRecipes[2]}/>
                        <RecipeCard value={this.state.foundRecipes[3]}/>
                        <RecipeCard value={this.state.foundRecipes[4]}/>
                        <RecipeCard value={this.state.foundRecipes[5]}/>
                    </ScrollView>

                    <Text
                        style={styles.cardScrollerText}
                    >
                        Random recipes
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <RecipeCard value={this.state.randomRecipes[0]}/>
                        <RecipeCard value={this.state.randomRecipes[1]}/>
                        <RecipeCard value={this.state.randomRecipes[2]}/>
                        <RecipeCard value={this.state.randomRecipes[3]}/>
                        <RecipeCard value={this.state.randomRecipes[4]}/>
                        <RecipeCard value={this.state.randomRecipes[5]}/>
                    {/*    <RecipeCard />
                        <RecipeCard />
                    <RecipeCard /> */}
                    </ScrollView>

                    <Text
                        style={styles.cardScrollerText}
                    >
                        Recommended recipes
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                    {/*    <RecipeCard />
                        <RecipeCard />
                    <RecipeCard />  */}
                    </ScrollView>

                </ScrollView>
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
    cardScrollerText: {
        paddingTop: '3%',
        paddingLeft: '2%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
})
