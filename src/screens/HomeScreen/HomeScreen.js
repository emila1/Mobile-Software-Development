import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeCard from '../../components/recipeCard'
import RecipeCardLoading from '../../components/recipeCardLoading';
import { getRandomRecipe, searchIngredients } from '../../utils/search';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

    // generate random number between 500 and 10000
    generateID() {
        return Math.floor(Math.random() * (10000 - 500 + 1)) + 500;
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
                            <>
                                {this.state.hasPins ? (this.state.pinnedRecipeIndexes.map((index) =>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("RecipeInfoScreen", { item: index })}>
                                <RecipeCard
                                    key={index}
                                    value={index}
                                    size="small"
                                //navigation={this.props.navigation}
                                />
                            </TouchableOpacity>
                                )).reverse() : ( <Ionicons name="pin" color="black" /> ) }
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
                                {this.state.randomRecipes.map((index) => <TouchableOpacity onPress={() => this.props.navigation.navigate("RecipeInfoScreen", { item: index })}>
                                    <RecipeCard
                                        key={this.generateID()}
                                        value={index}
                                        size="small"
                                    //navigation={this.props.navigation}
                                    />
                                </TouchableOpacity>
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
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("RecipeInfoScreen", { item: index })}>
                                <RecipeCard
                                    key={index}
                                    value={index}
                                    size="small"
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
