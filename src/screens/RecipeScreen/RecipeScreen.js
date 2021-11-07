import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';
import { MealStyles } from '../../styles/global';
import { getRandomRecipe } from '../../utils/search';
import Recipes from '../../../recipes/recipes.json';
import RecipeCard from '../../components/recipeCard'

const recipe = Recipes;
const ind = 55;
class RecipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomRecipes: getRandomRecipe(20),
        };
    }

    render() {
        return (
            <SafeAreaView style={test.recipeContainer}>
                <Text style={test.recipeTitle}>Recipes</Text>
                <Text style={test.RecipeSubtext}>Select any recipe to display full instructions!</Text>

                <FlatList style={test.recipeflatListContainer}
                    data={this.state.randomRecipes}
                    keyExtractor={item => this.state.randomRecipes.image_urls} // Less likely to give "must have unique key" warning
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={test.recipeTouchContainer}>

                            <RecipeCard value={item}/>
                
                            </TouchableOpacity>
                        )
                    }}
                />
            </SafeAreaView>
        );
    }
}

const test = StyleSheet.create({
    recipeContainer: {
        flex: 1,
        backgroundColor: '#C1553E'
    },
    recipeflatListContainer: {
        marginTop: 10,
    },
    recipeTouchContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    },
    recipeTitle: {
        fontSize: 60,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 25,
    },
    RecipeSubtext: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'center',
    },
});

export default RecipeScreen;