import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeCard from '../../components/recipeCard'
import RecipeCardLoading from '../../components/recipeCardLoading';
import { getRandomRecipe, searchIngredients } from '../../utils/search';

let list = ["tomato", "aubergine", "chili", "oil"]; // Development list
let myRecipeIndexes = [95, 317, 355, 377, 164, 45, 49, 207, 229]; // Development list
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foundRecipes: null,
            //foundRecipes: searchIngredients(list, 20),
            randomRecipes: null,
            loading: true
        };
    }


    componentDidMount() {
        this.setState({ randomRecipes: getRandomRecipe(10) })
        this.setState({ foundRecipes: myRecipeIndexes })
        setTimeout(() => { this.setState({ loading: false }) }, 100)

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
                        {this.state.loading ? (
                            <>
                                <RecipeCardLoading />
                            </>
                        ) : (
                            <>
                                {this.state.foundRecipes.map((index) => <RecipeCard
                                    key={index}
                                    value={index}
                                //navigation={this.props.navigation}
                                />
                                )}
                            </>
                        )
                        }
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
                        {this.state.loading ? (
                            <>
                                <RecipeCardLoading />
                            </>
                        ) : (
                            <>
                                {this.state.randomRecipes.map((index) => <RecipeCard
                                    key={index}
                                    value={index}
                                //navigation={this.props.navigation}
                                />
                                )}
                            </>
                        )}
                    </ScrollView>

                    <Text
                        style={styles.cardScrollerText}
                    >
                        Recently viewed
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
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
