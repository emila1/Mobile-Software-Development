import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
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
        this.getRecipeIndexes = this.getRecipeIndexes.bind(this);
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
            <>
            <FetchRecipeIndexes onFocused={this.getRecipeIndexes}/>
            <SafeAreaView style={styles.recipeContainer}>
                <Text style={styles.recipeTitle}>Suggested recipes</Text>
                {/* <Text style={MealStyles.RecipeSubtext}>Select any recipe to display full instructions!</Text> */}

                <FlatList style={styles.recipeflatListContainer}
                    data={this.state.foundRecipeIndexes}
                    //keyExtractor={item => this.state.randomRecipes.image_urls} // Less likely to give "must have unique key" warning
                    keyExtractor={(index) => index.toString()}
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={styles.recipeTouchContainer} onPress={() => this.props.navigation.navigate("RecipeInfoScreen", {item})}>
                                <RecipeCard
                                    key={item} 
                                    value={item}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </SafeAreaView>
            </>
        );
    }
}

function FetchRecipeIndexes({ onFocused }) {
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
    recipeContainer: {
        flex: 1,
        paddingTop: '10%',
        paddingLeft: '2%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
    recipeTitle: {
        paddingTop: '3%',
        paddingLeft: '2%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
      },
    recipeflatListContainer: {
        marginTop: 10,
    },
    recipeTouchContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    }
});