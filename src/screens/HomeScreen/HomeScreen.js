import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeCard from '../../components/recipeCard'
import RecipeCardLoading from '../../components/recipeCardLoading';
import { PlaceholderCard } from '../../components/placeholderCard'
import { getRandomRecipe } from '../../utils/search';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
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

    componentDidMount() {
        this.setState({ randomRecipes: getRandomRecipe(10) })
        this.getPinAndViewData()
        //this.setState({ foundRecipes: myRecipeIndexes })
        setTimeout(() => { this.setState({ loading: false }) }, 100)
    }

    // generate random number between 500 and 10000
    generateID() {
        return Math.floor(Math.random() * (10000)) + 500;
    }

    // Fetches pin and view indexes from local storage
    getPinAndViewData = async () => {
        this.setState({ loading: true })
        try {
            const pins = await AsyncStorage.getItem('pinnedRecipes')
            const views = await AsyncStorage.getItem('viewedRecipes')
            this.setState({
                pinnedRecipeIndexes: JSON.parse(pins),
                viewedRecipeIndexes: JSON.parse(views),
                loading: false
            })
            if (this.state.pinnedRecipeIndexes.length !== 0) {
                this.setState({
                    hasPins: true,
                })
            } else {
                this.setState({
                    hasPins: false,
                })
            }
            if (this.state.viewedRecipeIndexes.length !== 0) {
                this.setState({
                    hasViews: true,
                })
            } else {
                this.setState({
                    hasViews: false,
                })
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    render() {

        return (
            <>
                <FetchPinAndViewData onFocused={this.getPinAndViewData} />
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
                                    <RecipeCardLoading key={this.generateID()} />
                                </>
                            ) : (
                                <>
                                    {(this.state.hasPins && this.state.pinnedRecipeIndexes) ? (this.state.pinnedRecipeIndexes.map((index) =>
                                            <RecipeCard
                                                key={this.generateID()}
                                                value={index}
                                                size="small"
                                                navigation={this.props.navigation}
                                            />
                                    )).reverse() : (<PlaceholderCard
                                        mainText={"No pinned recipes yet"}
                                        secondaryText={"Tip: Tap the pin when viewing a recipe!"}
                                    />)}
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
                                    <RecipeCardLoading key={this.generateID()} />
                                </>
                            ) : (
                                <>
                                    {this.state.randomRecipes.map((index) => 
                                        <RecipeCard
                                            key={this.generateID()}
                                            value={index}
                                            size="small"
                                            navigation={this.props.navigation}
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
                                    <RecipeCardLoading key={this.generateID()} />
                                </>
                            ) : (
                                <>
                                    {this.state.hasViews ? (this.state.viewedRecipeIndexes.map((index) =>
                                            <RecipeCard
                                                key={this.generateID()}
                                                value={index}
                                                size="small"
                                                navigation={this.props.navigation}
                                            />
                                    )).reverse() : (<PlaceholderCard
                                        mainText={"No viewed recipes yet"}
                                        secondaryText={"Tip: Simply start browsing recipes!"}
                                    />)}
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
