import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useFonts, Montserrat } from '@expo-google-fonts/inter';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;


export const MealStyles = StyleSheet.create({
    //CSS for App.js

    cardScroller: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        alignItems: 'center',
        alignSelf: 'center',
    },

    buttonStyle: {
        color: 'black'
    },
    buttonCreat: {
        paddingTop: 150
    },
    red: {
        justifyContent: 'center',
        color: 'black',
        width: '100%',
        paddingTop: 20,
    },
    blue: {
        justifyContent: 'center',
        color: 'black',
        fontSize: 60,
        paddingBottom: 30
    },
    buttonGuest: {
        backgroundColor: '#0FAFE4',
        borderRadius: 30,
        width: 200,
        height: 35,
        margin: 5,
    },
  //CSS for App.js
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardScroller: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
  },
  cardScrollerText: {
    paddingTop: '3%',
    paddingLeft: '2%',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonStyle: {
    color: 'black',
  },
  buttonCreat: {
    paddingTop: 150,
  },
  red: {
    justifyContent: 'center',
    color: 'black',
    width: '100%',
    paddingTop: 20,
  },
  blue: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 60,
    paddingBottom: 30,
  },
  buttonGuest: {
    backgroundColor: '#0FAFE4',
    borderRadius: 30,
    width: 200,
    height: 35,
    margin: 5,
  },

  //CSS For MealMe Screen
  mealButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonText: {
    color: 'white',
  },
  alignMe1: {
    justifyContent: 'center',
    backgroundColor: '#FF9D0A',
    borderRadius: 15,
    width: 100,
    height: 90,
  },
  green: {
    fontFamily: 'sans-serif',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  pink: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  gold: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    fontWeight: 'normal',
    paddingLeft: 10,
    paddingBottom: 20,
  },

  //CSS For Surprise me
  Tab: {
    justifyContent: 'center',
    backgroundColor: '#E9E9E9',
    width: 395,
    height: 100,
    flexDirection: 'row',
    marginTop: 710,
    position: 'absolute',
    alignItems: 'center',
  },
  icons: {
    justifyContent: 'space-between',
    paddingLeft: 23,
    paddingRight: 23,
    height: 85,
  },

  //ShoppingScreen
  ShoppingViewContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  ButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    width: '100%',
  },
  ShoppingButton: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: '75%',
    height: '25%',
    borderRadius: 12,
    justifyContent: 'center',
    padding: '3%',
    backgroundColor: 'darkorange',
  },
  ShoppingButtonText: {
    textAlign: 'center',
    alignContent: 'center',
    textDecorationColor: 'red',
    height: '100%',
    width: '100%',
    fontSize: 20,
  },
  fridgeContainer: {
    height: windowHeight,
    width: windowWidth,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    paddingBottom: '4%',
  },
  fridgeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth,
    padding: 6,
    justifyContent: 'center',
    margin: 4,
  },
  fridgeInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '80%',
  },
  fridgeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
  },
  fridgeModalView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(100,100,100, 0.5)',
    padding: 20,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22,
  },
  fridgeInputModal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
  },

  //RecipeScreen
  recipeContainer: {
    flex: 1,
    backgroundColor: '#C1553E',
  },
  recipeflatListContainer: {
    marginTop: 10,
  },
  recipeTouchContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },
  recipeTitle: {
    fontSize: 60,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 25,
  },
  RecipeSubtext: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },

    //ShoppingScreen
    ShoppingViewContainer: {
        paddingTop: '20%',
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
    },
    ButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        width: '100%',

    },
    ShoppingButton: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 2,
        width: '75%',
        height: '25%',
        borderRadius: 12,
        justifyContent: 'center',
        padding: '3%',
        backgroundColor: 'darkorange',

    },
    ShoppingButtonText: {
        textAlign: 'center',
        alignContent: 'center',
        textDecorationColor: 'red',
        height: '100%',
        width: '100%',
        fontSize: 20,
    },
  //RecipeInfoScreen
  infoContainer: {
    backgroundColor: '#C1553E',
    padding: 10,
    flex: 1,
  },
  infoImageContainer: {
    height: '40%',
    width: '100%',
  },
  infoImage: {
    height: '100%',
    width: '100%',
    borderRadius: 35,
  },
  infoRecipeContainer: {
    alignSelf: 'flex-start',
    justifyContent: "center",
    alignItems: "center",
  },
  infoTextTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  infoTextSubtitle: {
    fontSize: 10,
    textAlign: 'center',
    color: 'white'
  },
  infoHeadContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  infoTextHead: {
    fontSize: 15,
    marginRight: 5,
    color: 'white'
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
    fontSize: 12,
    color: 'white'
  },
  infoInstructionsContainer: {
    flex: 1,
  },
  infoInstructionsText: {
    marginTop: 5,
    fontSize: 12,
    color: 'white'
  }
});