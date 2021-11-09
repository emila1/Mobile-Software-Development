import React from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, FlatList, List} from 'react-native';
import { MealStyles } from '../../styles/global';
import recipes from '../../../recipes/recipes.json'
import { Link } from '@react-navigation/native';

const recipe = recipes;
const tabs = ['ingredients', 'instructions'];

export default class RecipeInfoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
        <SafeAreaView style={MealStyles.infoContainer}>
            <View style={MealStyles.infoImageContainer}>
            <Image 
                style={MealStyles.infoImage}
                source={{uri: recipe[0].image_urls[0]}}/>
            </View>
            <Text style={MealStyles.infoTextTitle}>{recipe[0].title}</Text>
            <Text style={MealStyles.infoTextSubtitle}>{recipe[0].head}</Text>

            <View style={MealStyles.infoBoxContainer}>
                <View style={MealStyles.infoListContainer}>
                    <View>
                        <Text style={MealStyles.test}>test</Text>
                        <View>
                        <FlatList 
                        data={recipe}
                        renderItem={({item}) =>
                            <Text>{item.ingredients[0]}</Text>
                        }
                        />
                        </View>
                    </View>
                    <View>
                        <Text style={MealStyles.test}>test2</Text>
                        <View>
                        <FlatList
                        data={recipe}
                        renderItem={({item}) =>
                            <Text>{item.ingredients[1]}</Text>
                        }
                        />
                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
        );
    }
}
