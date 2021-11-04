import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const MealStyles = StyleSheet.create({
    //CSS for App.js
    container: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonStyle: {
        color: 'black'
    },
    buttonCreat: {
        paddingTop: 180
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



    //CSS For MealMe Screen
    mealButtons: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    alignMe1: {
        justifyContent: 'center',
        backgroundColor: '#FF9D0A',
        borderRadius: 15,
        width: 100,
        height: 90,
        marginHorizontal: 6,
        
    },
    buttonMeal: {
        color: 'white',
        fontSize: 16,
        alignItems: 'center',
        paddingLeft: 20,
    },
    green: {
        fontFamily: 'sans-serif',
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 10
    },
    pink: {
        fontFamily: 'sans-serif',
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 10
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
    },


    //CSS for Fridge Screen

    fridgeAdd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 30,
        width: 350,
        fontSize: 9,
        borderRadius: 14,
        backgroundColor: '#E9E9E9',
        margin: 10,
        padding: 5,
    },
    fridgeText: {
        fontSize: 12,
        paddingLeft: 5,
    },

    //HOMESCREEN IMAGE SLIDER
    Homescroll: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },

    cardScroller: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        alignItems: 'center',
        alignSelf: 'center'
    },
    cardScrollview: {
        
    },
    Cardview: {
    },
    
    cardScrollerText: {
        width: 150,
        padding: 4,
        margin: 5,
        textAlign : 'left',
        fontSize: 13,
        fontWeight: 'bold',
        //backgroundColor: '#40d9ff',
        borderRadius: 11,
    },
    cardWrapper: {
        marginTop: 13,
        
    },
    card: { 
        
    },
    cardImagewrap: {
        marginTop: 10,
        
    },
    cardImg: {
        height: '55%', 
        width: '35%',
        borderRadius: 15,
        
    },
    cardInfo: {
        
    },
    cardText: {
        fontWeight: 'bold',
        width: '35%',
    },


    // CSS for Home Screen Pictures

    cardContainer: {
        margin: windowWidth * 0.01,
        width: windowWidth * 0.4,
        height: windowHeight * 0.22,
        alignItems: 'center',
        justifyContent: 'center',       
        borderColor: '#fcb900',         
        borderWidth: 0.8,
        borderRadius: 10,     
    },
    imageCard: {
        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'contain',
        width: '85%',
        height: '85%',
        borderRadius: 11,
    },
    tmpText: {
        alignContent: 'center',
        fontStyle: 'italic',
        fontSize: 12,
    },


    //CSS for Setting page (Extra)

    Settingicons: {
        flexDirection: 'row',
        margin: 5,
        
    },
    iconsText: {
        textAlign: 'left',
        paddingRight: 200,
        
    },
});
