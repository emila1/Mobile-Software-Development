import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet, ScrollView, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeCard from '../../components/recipeCard'
import RecipeCardLoading from '../../components/recipeCardLoading';
import { getRandomRecipe, searchIngredients } from '../../utils/search';
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

//let myRecipeIndexes = [95, 317, 355, 377, 164, 45, 49, 207, 229]; // Development list
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.getPinAndViewData()
        this.state = {
            //foundRecipes: null,
            //foundRecipes: searchIngredients(list, 20),
            randomRecipes: null,
            loading: true,
            pinnedRecipeIndexes: [],
            viewedRecipeIndexes: [],
            hasPins: false,
            hasViews: false,
        };
    }

    // Fetches pin and view indexes from local storage
    getPinAndViewData= async () => {
        try {
            const pins = await AsyncStorage.getItem('pinnedRecipeIndexes')
            const views = await AsyncStorage.getItem('viewedRecipeIndexes')
            if (pins !== null) {
                this.setState({
                  pinnedRecipeIndexes: JSON.parse(pins),
                  hasPins: true
                })
            }
            if (views !== null) {
                this.setState({
                  viewedRecipeIndexes: JSON.parse(views),
                  hasViews: true
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    componentDidMount() {
        this.setState({ randomRecipes: getRandomRecipe(10) })
        //this.setState({ foundRecipes: myRecipeIndexes })
        setTimeout(() => { this.setState({ loading: false }) }, 100)
    }


    render() {
        return (
            <>
            <FetchPinAndViewData onFocused={this.getPinAndViewData}/>
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Text
                        style={styles.cardScrollerText}
                    >Pinned Recipes</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        
                    >
                        {this.state.loading ? (
                            <>
                                <RecipeCardLoading />
                            </>
                        ) : (
                            <TouchableOpacity style={styles.recipeTouchContainer}>
                                {this.state.hasPins ? (this.state.pinnedRecipeIndexes.map((index) => <RecipeCard
                                    key={index}
                                    value={index}
                                //navigation={this.props.navigation}
                                />
                                )).reverse() : ( <Ionicons name="pin" color="black" /> ) }
                            </TouchableOpacity>
                        )
                        }
                    </ScrollView>
                    <Text
                        style={styles.cardScrollerText}
                    >
                        Random Recipes
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
                        Viewed Recipes
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
                                {this.state.hasViews ? (this.state.viewedRecipeIndexes.map((index) =>
                                <TouchableOpacity style={styles.recipeTouchContainer}>
                                    <RecipeCard
                                        key={index}
                                        value={index}
                                    //navigation={this.props.navigation}
                                    />
                                </TouchableOpacity>
                                )).reverse() : ( <Ionicons name="pin" color="black" /> ) }
                            </>
                        )
                        }
                    </ScrollView>
                </ScrollView>
            </View>
            </>
        );
    }
}

function FetchPinAndViewData({ onFocused }) {
    useFocusEffect(
      React.useCallback(() => {
        onFocused();
        return () => {
            }
      }, [])
    );
  
    return null;
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
    recipeTouchContainer: {
        flexDirection: 'row',
},
})
