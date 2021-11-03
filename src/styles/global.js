import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const MealStyles = StyleSheet.create({
    //CSS for App.js
    container: {
        paddingTop: 30,
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
    cardScrollerText: {
        padding: 5,
        textAlign : 'left',
        fontSize: 20,
        fontWeight: 'bold',
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
    buttonText: {
        color: 'white'
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



});