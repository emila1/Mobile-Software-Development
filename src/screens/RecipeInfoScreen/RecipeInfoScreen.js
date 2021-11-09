import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  List,
} from "react-native";
import { MealStyles } from "../../styles/global";
import recipes from "../../../recipes/recipes.json";
import { Link } from "@react-navigation/native";

const recipe = recipes;
const tabs = ["ingredients", "instructions"];

export default class RecipeInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={MealStyles.infoContainer}>
        <View style={MealStyles.infoImageContainer}>
          <Image
            style={MealStyles.infoImage}
            source={{ uri: recipe[0].image_urls[0] }}
          />
        </View>
        <Text style={MealStyles.infoTextTitle}>{recipe[0].title}</Text>
        <Text style={MealStyles.infoTextSubtitle}>{recipe[0].head}</Text>

        <View style={MealStyles.infoBoxContainer}>
          <View style={MealStyles.infoListContainer}>
            <Text>test</Text>
            <Text>test2</Text>
          </View>
          <View style={MealStyles.infoListContainer}>
            <FlatList
              style={MealStyles.test2}
              data={recipe}
              renderItem={({ item }) => (
                <Text style={MealStyles.test3}>{item.ingredients[1]}</Text>
              )}
            />
            <FlatList
              style={MealStyles.test4}
              data={recipe}
              renderItem={({ item }) => (
                <Text style={MealStyles.test3}>{item.ingredients[1]}</Text>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
