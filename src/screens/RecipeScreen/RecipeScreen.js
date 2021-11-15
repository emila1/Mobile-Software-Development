import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import { MealStyles } from '../../styles/global';
import { searchRecipes } from '../../utils/search';
import { useFocusEffect } from '@react-navigation/native';
import RecipeCard from '../../components/recipeCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class RecipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.getRecipeIndexes();
        this.state = {
            randomRecipes: [],
        };
    }

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


    render() {


        return (

            <SafeAreaView style={MealStyles.recipeContainer}>
                <Text style={MealStyles.recipeTitle}>Recipes</Text>
                {/* <Text style={MealStyles.RecipeSubtext}>Select any recipe to display full instructions!</Text> */}

                <FlatList style={MealStyles.recipeflatListContainer}
                    data={this.state.foundRecipeIndexes}
                    //keyExtractor={item => this.state.randomRecipes.image_urls} // Less likely to give "must have unique key" warning
                    keyExtractor={(index) => index.toString()}
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={MealStyles.recipeTouchContainer} onPress={() => this.props.navigation.navigate("RecipeInfoScreen", {item})}>
                                <RecipeCard
                                    key={item} 
                                    value={item}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </SafeAreaView>
        );
    }
}