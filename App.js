/*
import 'react-native-gesture-handler'
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Homescreen, Recipescreen } from './src/screens'

const StackHome = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Homescreen" component={Homescreen} />
            <Drawer.Screen name="Recipe" component={Recipescreen} />

        </Drawer.Navigator>
    )
}

// function HomeStack({ navigation }) {
//     return (
//         <StackHome.Navigator initialRouteName="Home" navigation={navigation} screenOptions={{ headerShown: false }} >
//             <StackHome.Screen name="Home" component={Homescreen} />
//             <StackHome.Screen name="Recipe" component={Recipescreen} options={{ title: "Recipe" }} />
//         </StackHome.Navigator>
//     )
// }

//det er vores UI i React Native
export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});*/

import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealStyles } from './src/styles/global';
import MealMeScreen from "./src/screens/mealMe";
import RecipeScreen from "./src/screens/recipes";
import SurpriseMeScreen from "./src/screens/surpriseMe";
import Homescreen from './src/screens/Homescreen/Homescreen';
import MyFridge from "./src/screens/myFridge";
import SettingScreen from "./src/screens/settings";


// function HomeScreen({ navigation }) {
//     return (
//         <View style={MealStyles.container}>
//             <View>
//                 <Image source={require('./assets/splash.png')} style={{ resizeMode: "contain", width: 250, height: 250 }}/>
//             </View>

//             <Text style={MealStyles.red}>Keep your meal up to date......</Text>
//             <Text style={MealStyles.blue}>. . . .</Text>

//             <View style={MealStyles.buttonGuest}>
//                 <Button style={MealStyles.buttonStyle} title="Sign in" color='white'/>
//             </View>

//             <View style={MealStyles.buttonGuest}>
//                 <Button style={MealStyles.buttonStyle} title="Continue as guest" color='white' onPress={() => navigation.navigate('MealMe')}/>
//             </View>

//             <View style={MealStyles.buttonCreat}>
//                 <Button style={MealStyles.buttonStyle} onPress={() => alert("Try guest acount")} title="Create an account" />
//             </View>

//         </View>
//     );
// }

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Home" component={Homescreen} />
                <Stack.Screen name="MealMe" component={MealMeScreen} />
                <Stack.Screen name="Recipe" component={RecipeScreen} />
                <Stack.Screen name="SurpriseMe" component={SurpriseMeScreen} />
                <Stack.Screen name="MyFridge" component={MyFridge} />
                <Stack.Screen name="Setting" component={SettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;