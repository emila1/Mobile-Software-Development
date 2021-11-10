import React from "react";
import {Text, View, Image, SafeAreaView, StyleSheet, FlatList, List,} from "react-native";
import { MealStyles } from "../../styles/global";
import recipes from "../../../recipes/recipes.json";
import { Ionicons } from "@expo/vector-icons";

const recipe = recipes;

export default function RecipeInfoScreen({ route }) {
  const { item: id } = route.params;

  return (
    <SafeAreaView style={MealStyles.infoContainer}>
      <View style={MealStyles.infoImageContainer}>
        <Image
          style={MealStyles.infoImage}
          source={{ uri: recipe[id].image_urls[0] }}
        />
      </View>
        <View style={MealStyles.infoRecipeContainer}>
        <Text style={MealStyles.infoTextTitle}>{recipe[id].title}</Text>
        <Text style={MealStyles.infoTextSubtitle}>{recipe[id].subtitle}</Text>

        <View style={MealStyles.infoHeadContainer}>
          <Ionicons name={"time"} color={"white"} />
          <Text style={MealStyles.infoTextHead}>{recipe[id].head[0]}</Text>
          <Ionicons name={"hourglass"} color={"white"} />
          <Text style={MealStyles.infoTextHead}>{recipe[id].head[1]}</Text>
          <Ionicons name={"people"} color={"white"} />
          <Text style={MealStyles.infoTextHead}>{recipe[id].head[2]}</Text>
          <Ionicons name={"book"} color={"white"} />
          <Text style={MealStyles.infoTextHead}>{recipe[id].head[3]}</Text>
        </View>
      </View>

      <View style={MealStyles.infoTitleContainer}>
            <Text style={MealStyles.infoTextTitleBox}>Ingredients</Text>
            <Text style={MealStyles.infoTextTitleBox}>instructions</Text>
      </View>
        
      <View style={MealStyles.infoBoxContainer}>
        <View style={MealStyles.infoListContainer}>
          <FlatList
            style={MealStyles.infoIngredientsContainer}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag"
            data={recipe[id].ingredients}
            renderItem={({ item }) => (
              <Text style={MealStyles.infoInstructionsText}>{item}</Text>
            )}
          />
          <FlatList
            style={MealStyles.infoInstructionsContainer}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag"
            data={recipe[id].instructions}
            renderItem={({ item }) => (
              <Text style={MealStyles.infoInstructionsText}>{item}</Text>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
