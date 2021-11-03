import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { MealStyles } from './src/styles/global';
//import MealMeScreen from "./src/screens/mealMe";
//import RecipeScreen from "./src/screens/recipes";
//import SurpriseMeScreen from "./src/screens/surpriseMe";
//import Homescreen from './src/screens/Homescreen/Homescreen';
//import StartScreen from './src/screens/StartScreen/StartScreen';
//import FavoritesScreen from './src/screens/FavoritesScreen/FavoritesScreen';
//import MyFridge from "./src/screens/myFridge";
//import SettingScreen from "./src/screens/settings";
import { Homescreen, MyFridgeScreen, SettingScreen, StartScreen, SurpriseMeScreen, FavoritesScreen } from './src/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'



const StackHome = createNativeStackNavigator();
const StackShopping = createNativeStackNavigator();
const StackFavorite = createNativeStackNavigator();
const StackSettings = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack({ navigation }) {
    return (
        <StackHome.Navigator initialRouteName="HomeScreen" navigation={navigation}  >
            <StackHome.Screen name="HomeScreen" component={Homescreen} options={{ title: "Home" }} />
            {/*<StackHome.Screen name="Recipe" component={RecipeScreen} /> */}
        </StackHome.Navigator>
    )
}

//Implement Shopping Screen with MyFridge and ShoppingList screens nested. Change initialroute
function ShoppingStack({ navigation }) {
    return (
        <StackShopping.Navigator initialRouteName="MyFridge" navigation={navigation} >
            <StackShopping.Screen name="MyFridge" component={MyFridgeScreen} />

        </StackShopping.Navigator>
    )
}

function FavoriteStack({ navigation }) {
    return (
        <StackFavorite.Navigator navigation={navigation} >
            <StackFavorite.Screen name="FavoritesScreen" component={FavoritesScreen} />
        </StackFavorite.Navigator>
    )
}

function SettingsStack({ navigation }) {
    return (
        <StackSettings.Navigator initialRouteName="Setting" navigation={navigation} >
            <StackSettings.Screen name="Setting" component={SettingScreen} />
        </StackSettings.Navigator>
    )
}


function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-circle' : 'ios-list';
                    } else if (route.name === 'Shopping') {
                        iconName = focused ? 'basket' : 'basket-outline'
                    } else if (route.name === 'Favorites') {
                        iconName = focused ? 'heart-circle-sharp' : 'heart-circle-outline'
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Shopping" component={ShoppingStack} />
                <Tab.Screen name="Favorites" component={FavoriteStack} />
                <Tab.Screen name="Settings" component={SettingsStack} />
            </Tab.Navigator>
            {/* <Stack.Navigator initialRouteName="Start" >
                <Stack.Screen name="Home" component={Homescreen} />
                <Stack.Screen name="Start" component={StartScreen} />
                <Stack.Screen name="MealMe" component={MealMeScreen} />
                <Stack.Screen name="Recipe" component={RecipeScreen} />
                <Stack.Screen name="SurpriseMe" component={SurpriseMeScreen} />
                <Stack.Screen name="MyFridge" component={MyFridge} />
                <Stack.Screen name="Setting" component={SettingScreen} />
            </Stack.Navigator> */}
        </NavigationContainer>
    );
}

export default App;