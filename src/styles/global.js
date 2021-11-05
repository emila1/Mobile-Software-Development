import { StyleSheet, Dimensions, StatusBar } from 'react-native';



export const MealStyles = StyleSheet.create({
    //CSS for App.js
    container: {
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        alignSelf: 'center'
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

    //ShoppingScreen
    ButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: Dimensions.get('window').width,

    },
    ShoppingButton: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 2,
        width: '75%',
        height: '12%',
        borderRadius: 12,
        backgroundColor: 'darkorange',
        justifyContent: 'center',
        padding: '3%'

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
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    fridgeInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        padding: 6,
        justifyContent: 'center',
        margin: 4
    },
    fridgeInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: '80%'
    },
    fridgeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width
    }



});