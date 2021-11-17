import React from "react";
import { Text, View, Image, SafeAreaView, StyleSheet, FlatList, List, TouchableOpacity } from "react-native";
import { MealStyles } from "../../styles/global";
import recipes from "../../../recipes/recipes.json";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TabView, SceneMap } from "react-native-tab-view";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';


const recipe = recipes;

export default class RecipeInfoScreen extends React.Component {
  constructor(props) {
    super(props)
    this.getPinData()
    this.state = {
      isPinned: false,
      pinnedRecipeIndexes: [],
      viewedRecipeIndexes: [],
      index: null,
    }
  }

  // This is called at construction. It fetches pinned recipe indexes (if any exist) from local storage
  getPinData = async () => {
    try {
      const items = await AsyncStorage.getItem('pinnedRecipeIndexes')
      if (items !== null) {
        this.setState({
          pinnedRecipeIndexes: JSON.parse(items),
        });
      }
      this.checkIfPinned()
    } catch (error) {
      console.log(error.message)
    }
  }

  // Checks if this recipe's index is found in the fetched pin indexes and sets pin state accordingly
  checkIfPinned() {
    if (this.state.pinnedRecipeIndexes.includes(this.state.index)) {
      this.setState({
        isPinned: true
      })
    } else {
      this.setState({
        isPinned: false
      })
    }
  }

  // Either removed this recipe index or adds it to the fetched pin indexes
  handlePin() {
    if (this.state.isPinned == true) {
      const index = this.state.pinnedRecipeIndexes.indexOf(this.state.index)
      this.state.pinnedRecipeIndexes.splice(index, 1)
    } else {
      this.state.pinnedRecipeIndexes.push(this.state.index)
    }
    this.saveChange()
  }

  // Fetches the viewed recipe indexes in local storage
  getViewData = async () => {
    try {
      const items = await AsyncStorage.getItem('viewedRecipeIndexes');
      if (items !== null) {
        this.setState({
          viewedRecipeIndexes: JSON.parse(items),
        });
      }
    } catch (error) {
      console.log(error.message)
    }
    this.saveViewData()
  }

  // Saves this recipe's index to viewed recipe indexes in local storage
  saveViewData = async () => {
    try {
      // Deletes an earlier view index if found
      if (this.state.viewedRecipeIndexes.includes(this.state.index)) {
        const index = this.state.viewedRecipeIndexes.indexOf(this.state.index)
        this.state.viewedRecipeIndexes.splice(index, 1)
        console.log("deleted old entry")
      }
      // Pushes view index to the back of the array and saves to viewed recipe indexes local storage
      this.state.viewedRecipeIndexes.push(this.state.index)
      await AsyncStorage.setItem('viewedRecipeIndexes', JSON.stringify(this.state.viewedRecipeIndexes))
      console.log("saved to view history")
    } catch (error) {
      console.log(error.mesage)
    }
  }

  // Saves pin change to pinned recipe indexes in local storage
  saveChange = async () => {
    try {
      await AsyncStorage.setItem('pinnedRecipeIndexes', JSON.stringify(this.state.pinnedRecipeIndexes));
    } catch (error) {
      console.log(error.mesage)
    }
  }

  // Flip-flops the pin state after change
  togglePin = () => {
    this.setState({
      isPinned: !this.state.isPinned
    })
    this.handlePin()
  }

  // This only goes through the if() once, for the sake of getting and setting this recipe's index
  setIndex(id) {
    if (this.state.index == null) { // To prevent a loop of setting state and rendering
      this.setState({
        index: id
      })
      this.getViewData()
    }
  }


  render() {

    const { item: id } = this.props.route.params;
    this.setIndex(id)

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

              <Ionicons name={"pin"} color={"black"} />
              <TouchableOpacity onPress={this.togglePin}>
                {this.state.isPinned ? (
                  <AntDesign name="pushpin" size={24} color="black" />
                ) : (
                  <AntDesign name="pushpino" size={24} color="black" />
                )}
                {/* <Text style={MealStyles.infoTextHead}> {this.state.isPinned ? "Pinned" : "Pin"} </Text> */}
              </TouchableOpacity>

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
}

const styles = StyleSheet.create({
  toggleButton: {
    backgroundColor: "black",
    height: 35,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});