import React from "react";
import {Text, View, Image, SafeAreaView, StyleSheet, FlatList, List,} from "react-native";
import { MealStyles } from "../../styles/global";
import recipes from "../../../recipes/recipes.json";
import { Ionicons } from "@expo/vector-icons";
import { TabView, SceneMap } from "react-native-tab-view";
import { ScrollView } from "react-native-gesture-handler";


const recipe = recipes;

export default function RecipeInfoScreen({ route }) {
  const { item: id } = route.params;

  return (
   
   <SafeAreaView style={MealStyles.infoContainer}>
     <ScrollView> 
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
          <Ionicons name={"time"} color={"black"} />
          <Text style={MealStyles.infoTextHead}>{recipe[id].head[0]}</Text>
          <Ionicons name={"hourglass"} color={"black"} />
          <Text style={MealStyles.infoTextHead}>{recipe[id].head[1]}</Text>
          <Ionicons name={"people"} color={"black"} />
          <Text style={MealStyles.infoTextHead}>{recipe[id].head[2]}</Text>
          <Ionicons name={"book"} color={"black"} />
          <Text style={MealStyles.infoTextHead}>{recipe[id].head[3]}</Text>
        </View>
      </View> 

      <Text style={MealStyles.infoTextTitleBox}>ingredients</Text>
      <View style={MealStyles.infoTitleContainer}>
            
      <FlatList
            style={MealStyles.infoInstructionsContainer}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag"
            data={recipe[id].ingredients}
            renderItem={({ item }) => (
              <Text style={MealStyles.infoIngredientsText}>{item}</Text>
            )}
          />
      </View>

      <Text style={MealStyles.infoTextTitleBox}>instructions</Text>
      <View style={MealStyles.infoTitleContainer}>
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
      
      </ScrollView> 
    </SafeAreaView> 
  ); 
}
