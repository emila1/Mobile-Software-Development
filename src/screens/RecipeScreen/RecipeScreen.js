import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import { MealStyles } from '../../styles/global';
import { getRandomRecipe } from '../../utils/search';
import RecipeCard from '../../components/recipeCard';

export default class RecipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomRecipes: getRandomRecipe(20),
        };
    }

    render() {
        return (
            <SafeAreaView style={MealStyles.recipeContainer}>
                <Text style={MealStyles.recipeTitle}>Recipes</Text>
                <Text style={MealStyles.RecipeSubtext}>Select any recipe to display full instructions!</Text>

                <FlatList style={MealStyles.recipeflatListContainer}
                    data={this.state.randomRecipes}
                    keyExtractor={item => this.state.randomRecipes.image_urls} // Less likely to give "must have unique key" warning
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={MealStyles.recipeTouchContainer} onPress={() => this.props.navigation.navigate("RecipeInfoScreen")}>

                            <RecipeCard value={item}/>
                
                            </TouchableOpacity>
                        )
                    }}
                />
            </SafeAreaView>
        );
    }
}