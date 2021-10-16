import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { getRandomRecipe, searchIngredients } from '../../utils/search'

export default class Homescreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomRecipes: {}
        };
    }

    render() {
        console.log(this.state.randomRecipes)
        return (
            <View>

                <Text> Homescreen </Text>
                <Button title="Go to recipe" onPress={() => this.props.navigation.navigate("Recipe")} />
                <Button title="Get Random Recipe" onPress={() =>
                    this.setState({ randomRecipes: getRandomRecipe(1) })
                    //console.log(getRandomRecipe(1)[1].title)
                } />
            </View>
        );
    }
}
