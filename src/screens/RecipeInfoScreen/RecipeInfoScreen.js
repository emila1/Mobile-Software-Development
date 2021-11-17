import React from "react";
import {Text, View, Image, SafeAreaView,Button ,TouchableOpacity, StyleSheet, FlatList, List, Dimensions} from "react-native";
import { MealStyles } from "../../styles/global";
import recipes from "../../../recipes/recipes.json";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TabView, SceneMap } from "react-native-tab-view";
import { ScrollView } from "react-native-gesture-handler";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
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
        displayIngredients: true
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
  handlePin () {
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
      }
      // Pushes view index to the back of the array and saves to viewed recipe indexes local storage
      this.state.viewedRecipeIndexes.push(this.state.index)
      await AsyncStorage.setItem('viewedRecipeIndexes', JSON.stringify(this.state.viewedRecipeIndexes))
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

setIngredientsText = () => {
  this.setState({
    displayIngredients: true
  }, console.log('Ingredients: ', this.state.displayIngredients)) 
}

setInstructionsText = () => {
  this.setState({
    displayIngredients: false
  }, console.log('Ingredients: ', this.state.displayIngredients))
}

render() {

  const { item: id } = this.props.route.params;
  this.setIndex(id)

  return (
      <> 

      <ScrollView>
      <Image
          style={styles.infoImage}
          source={{ uri: recipe[id].image_urls[0] }}
      /> 
      <View style={styles.bodyContainer} >
      <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.goBack()}>
      <Ionicons name="arrow-back" size={25} />
      </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.infoTextTitle}>{recipe[id].title}</Text>
          <Text style={styles.infoTextSubtitle}>{recipe[id].subtitle}</Text>
          <View style={styles.infoHeadContainer}>
            <Ionicons name={"time"} color={"tomato"} />
            <Text style={styles.infoTextHead}>{recipe[id].head[0]}</Text>
            <Ionicons name={"hourglass"} color={"tomato"} />
            <Text style={styles.infoTextHead}>{recipe[id].head[1]}</Text>
            <Ionicons name={"people"} color={"tomato"} />
            <Text style={styles.infoTextHead}>{recipe[id].head[2]}</Text>
            <Ionicons name={"book"} color={"tomato"} />
            <Text style={styles.infoTextHead}>{recipe[id].head[3]}</Text>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.switchButton} onPress={this.setIngredientsText}>
              <Text 
                style={[this.state.displayIngredients ? styles.orange : styles.black]}
                >Ingredients
              </Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchButton} onPress={this.setInstructionsText}>
              <Text 
                style={[this.state.displayIngredients ? styles.black : styles.orange]}
                >Instructions
              </Text> 
            </TouchableOpacity>
        </View>
        </View>
            <TouchableOpacity onPress={this.togglePin}>
                {this.state.isPinned ? (
                  <>
                    <AntDesign name="pushpin" size={25} color="black" />
                  </>
                ) : (
                  <>
                    <AntDesign name="pushpino" size={25} color="black" />
                  </>
            )}
            </TouchableOpacity>
        <View style={styles.infoInstructionsContainer}>
          {this.state.displayIngredients ? (
            <>
              {recipe[id].ingredients.map((ingredient, index) => (
              <Text key={index} style={styles.infoTextIngredients}>• {ingredient}</Text>))}
            </>
          ) : (
            <>
              {recipe[id].instructions.map((instruction, index) => (
              <Text key={index} style={styles.infoTextIngredients}>{index + 1}. {instruction}</Text>))}
            </>
          )}
{/*           {recipe[id].ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.infoTextIngredients}>• {ingredient}</Text>))} */}
        </View>         
      </View>  
      </ScrollView>
      </>
 
/*        <View style={styles.container}>
        <Text style={styles.infoTextTitle}>{recipe[id].title}</Text>
        <Text style={styles.infoTextSubtitle}>{recipe[id].subtitle}</Text>


      </View>

      <Text style={styles.infoTextTitleBox}>Ingredients</Text>
      <View style={styles.infoTitleContainer}>
            
      <FlatList
            style={styles.infoInstructionsContainer}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag"
            data={recipe[id].ingredients}
            renderItem={({ item }) => (
              <Text style={styles.infoIngredientsText}>• {item}</Text>
            )}
          />
      </View>

      <Text style={styles.infoTextTitleBox}>Instructions</Text>
      <View style={styles.infoTitleContainer}>
            <FlatList
            style={styles.infoInstructionsContainer}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag"
            data={recipe[id].instructions}
            renderItem={({ item }) => (
              <Text style={styles.infoInstructionsText}>{item}</Text>
            )}
          />
      </View>  */ 

    ); 
  }
}


const styles = StyleSheet.create({
    container: {
      paddingTop: '10%',
      paddingLeft: '2%',
      paddingRight: 10,
    },
    titleContainer: {
      paddingTop: '5%',
      paddingLeft: '5%',
      paddingRight: '5%',
      backgroundColor: "white", 
      height: windowHeight * .3
    },
    bodyContainer: {
      flex: 2
    },
    infoImage: {
      marginTop: '0%',
      marginBottom: '0%',
      paddingBottom: 0,
      height: windowHeight * .3,
      flex: 1,
      resizeMode: 'cover',
      //height: windowHeight * .3,
      margin: '0%',
      width: windowWidth,
      borderRadius: 10,
    },
    black: {
      color: 'black'
    },
    orange: {
      color: 'tomato'
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: '13%',
      position: 'absolute',
      bottom: 0
    },
    infoRecipeContainer: {
      alignSelf: 'flex-start',
      justifyContent: "center",
      alignItems: "center",
    },
    infoTextTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'left',
      color: 'black'
    },
    infoTextSubtitle: {
      fontSize: 15,
      textAlign: 'left',
      color: 'black'
    },
    infoHeadContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      justifyContent: 'space-evenly',
      //paddingLeft: '13%',
      //position: 'absolute',
      bottom: 0
    },
    infoTextHead: {
      color:'black',
      fontWeight:'bold',
      fontSize: 15,
      padding: 3
    },
    infoTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    infoTextTitleBox: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    infoTextIngredients: {
      paddingLeft: '5%',
      fontSize: 15,
      textAlign: 'left',
      color: 'black'
    },
    infoBoxContainer: {
      flex: 1,
    },
    infoListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 5,
      flex: 1,
    },
    infoIngredientsContainer: {
      flex: 1,
    },
    infoIngredientsText: {
      marginTop: 5,
      fontSize: 15,
      color: 'black'
    },
    infoInstructionsContainer: {
      padding: "2%"
    },
    infoInstructionsText: {
      marginTop: 5,
      fontSize: 12,
      color: 'black'
    },
  toggleButton: {
    backgroundColor: "green",
    height: 35,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //justifyContent: 'space-around',
    flex: 1,
    //height: windowHeight * .1,
  },
  switchButton: {
    backgroundColor: "white",
    height: 35,
    width: windowWidth * .5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});