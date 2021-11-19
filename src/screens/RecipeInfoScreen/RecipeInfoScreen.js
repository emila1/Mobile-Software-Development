import React from "react";
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions, Button } from "react-native";
import recipes from "../../../recipes/recipes.json";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Divider } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';



const recipe = recipes;

export default class RecipeInfoScreen extends React.Component {
  constructor(props) {
    super(props)
    //this.getPinData()
    this.state = {
      isPinned: false,
      pinnedRecipeIndexes: [],
      viewedRecipeIndexes: [],
      id: this.props.route.params.index,
      //index: null,
      displayIngredients: true
    }
    this.handleGoBack = this.handleGoBack.bind(this)
  }

  componentDidMount() {
    this.getPinData();
    this.handleViewed();
  }

  // get pinned recipes from async storage
  getPinData = async () => {
    try {
      const value = await AsyncStorage.getItem('pinnedRecipes');
      if (value !== null) {
        // We have data!!
        this.setState({
          pinnedRecipeIndexes: JSON.parse(value)
        }, this.checkPinned)
      }
    } catch (error) {
      // Error retrieving data
      console.log("error: ", error)
    }
  }

  // if index is in pinnedRecipeIndexes, set isPinned to true
  checkPinned = () => {
    if (this.state.pinnedRecipeIndexes.includes(this.state.id)) {
      this.setState({
        isPinned: true
      })
    }
  }

  // if isPinned is true, add index to pinnedRecipes
  // if isPinned is false, remove index from pinnedRecipes
  savePinData = () => {
    if (this.state.isPinned) {
      this.state.pinnedRecipeIndexes.push(this.state.id)
    } else {
      this.state.pinnedRecipeIndexes.splice(this.state.pinnedRecipeIndexes.indexOf(this.state.id), 1)
    }
    AsyncStorage.setItem('pinnedRecipes', JSON.stringify(this.state.pinnedRecipeIndexes))
  }

  // add index to viewedRecipes in async storage. If index is already in viewedRecipes, do nothing.
  handleViewed = () => {
    AsyncStorage.getItem('viewedRecipes', (err, result) => {
      if (result !== null) {
        const viewedRecipes = JSON.parse(result)
        // if viewedRecipes is longer than 6, remove the first index
        if (viewedRecipes.length > 5) {
          viewedRecipes.shift()
        }
        if (!viewedRecipes.includes(this.state.id)) {
          viewedRecipes.push(this.state.id)
          AsyncStorage.setItem('viewedRecipes', JSON.stringify(viewedRecipes))
        }
      } else {
        const viewedRecipes = [this.state.id]
        AsyncStorage.setItem('viewedRecipes', JSON.stringify(viewedRecipes))
      }
    })
  }


  // flip value of isPinned
  togglePin = () => {
    this.setState({
      isPinned: !this.state.isPinned
    }, this.savePinData)
  }

  setIngredientsText = () => {
    this.setState({
      displayIngredients: true
    })
  }

  setInstructionsText = () => {
    this.setState({
      displayIngredients: false
    })
  }

  handleGoBack = () => {
    this.props.navigation.goBack();
  }


  render() {
    //const { item: id } = this.props.route.params;
    //this.setIndex(id)
    return (
      <>
        <ScrollView>
          <ImageBackground
            style={styles.infoImage}
            source={{ uri: recipe[this.state.id].image_urls[0] }}
          >
            <View style={{ marginTop: '10%', marginLeft: '2%'}}>
            <TouchableOpacity style={{ 
                flex: 1,
                marginTop: '2%', 
                marginLeft: '2%', 
                paddingLeft: '5%',
                paddingTop: '5%', 
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 25,
                opacity: 0.90,
                position: "absolute"}} onPress={this.handleGoBack}>
              <Ionicons name="arrow-back" size={27} color="tomato" />
            </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.bodyContainer} >
            <View style={styles.titleContainer}>
              <Text style={styles.infoTextTitle}>{recipe[this.state.id].title}</Text>
              <Text style={styles.infoTextSubtitle}>{recipe[this.state.id].subtitle}</Text>
              <TouchableOpacity onPress={this.togglePin}>
                {this.state.isPinned ? (
                  <>
                    <AntDesign name="pushpin" size={25} color="tomato" />
                  </>
                ) : (
                  <>
                    <AntDesign name="pushpino" size={25} color="black" />
                  </>
                )}
              </TouchableOpacity>
              <View style={styles.infoHeadContainer}>
                <Ionicons name={"time"} color={"tomato"} />
                <Text style={styles.infoTextHead}>{recipe[this.state.id].head[0]}</Text>
                <Ionicons name={"hourglass"} color={"tomato"} />
                <Text style={styles.infoTextHead}>{recipe[this.state.id].head[1]}</Text>
                <Ionicons name={"people"} color={"tomato"} />
                <Text style={styles.infoTextHead}>{recipe[this.state.id].head[2]}</Text>
                <Ionicons name={"book"} color={"tomato"} />
                <Text style={styles.infoTextHead}>{recipe[this.state.id].head[3]}</Text>
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
              <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 1, }} />
            </View>

            <View style={styles.infoInstructionsContainer}>
              {this.state.displayIngredients ? (
                <>
                  {recipe[this.state.id].ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.infoTextIngredients}>• {ingredient}</Text>))}
                </>
              ) : (
                <>
                  {recipe[this.state.id].instructions.map((instruction, index) => (
                    <Text key={index} style={styles.infoTextIngredients}>• {instruction}</Text>))}
                </>
              )}
              {/*           {recipe[id].ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.infoTextIngredients}>• {ingredient}</Text>))} */}
            </View>
          </View>
        </ScrollView>
      </>
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
    color: 'black',
    fontWeight: 'bold',
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