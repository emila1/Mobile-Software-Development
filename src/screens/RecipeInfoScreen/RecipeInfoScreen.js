import React from "react";
import {Text, View, Image, SafeAreaView,Button ,TouchableOpacity, StyleSheet, FlatList, List, Dimensions} from "react-native";
import { MealStyles } from "../../styles/global";
import recipes from "../../../recipes/recipes.json";
import { Ionicons } from "@expo/vector-icons";
import { TabView, SceneMap } from "react-native-tab-view";
import { ScrollView } from "react-native-gesture-handler";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const recipe = recipes;

export default function RecipeInfoScreen({ route }) {
  const { item: id } = route.params;

  return (
   
   <>
      <Image
          style={styles.infoImage}
          source={{ uri: recipe[id].image_urls[0] }}
      /> 
      {/* <View style={{ backgroundColor: "#7cb48f", flex: 1 }} /> */}
      <View style={{ backgroundColor: "#7CA1B4", flex: 2 }} />
{/*         <Image
          style={styles.infoImage}
          source={{ uri: recipe[id].image_urls[0] }}
        /> */}



{/* 
      <View style={styles.container}>
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
      </View>
       */}
    </> 
  ); 
}

const styles = StyleSheet.create({
    container: {
      color: 'black',
      paddingTop: '10%'
    },
    infoImage: {
      marginTop: '0%',
      marginBottom: '0%',
      paddingBottom: 0,

      flex: 1,
      resizeMode: 'cover',
      //height: windowHeight * .3,
      margin: '0%',
      width: windowWidth,
      borderRadius: 10,
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
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'left',
      color: 'black'
    },
    infoTextSubtitle: {
      fontSize: 10,
      textAlign: 'center',
      color: 'black'
    },
    infoHeadContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      //paddingLeft: '13%',
      position: 'absolute',
      bottom: 0
    },
    infoTextHead: {
      color:'black',
      fontSize: 20,
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
    }
})
