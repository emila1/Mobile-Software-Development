import * as React from 'react';
import { Text, View, Image, Button, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from './src/AuthContext/AuthContext';
//import { MealStyles } from './src/styles/global';
//import MealMeScreen from "./src/screens/mealMe";
//import RecipeScreen from "./src/screens/recipes";
//import SurpriseMeScreen from "./src/screens/surpriseMe";
//import Homescreen from './src/screens/Homescreen/Homescreen';
//import StartScreen from './src/screens/StartScreen/StartScreen';
//import FavoritesScreen from './src/screens/FavoritesScreen/FavoritesScreen';
//import MyFridge from "./src/screens/myFridge";
//import SettingScreen from "./src/screens/settings";
import { Homescreen, MyFridgeScreen, RecipeScreen, SettingScreen, StartScreen, SurpriseMeScreen, FavoritesScreen } from './src/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigator({ navigation, extraData }) {
    return (
        <Tab.Navigator initialRouteName="Home" navigation={navigation} screenOptions={({ route }) => ({
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
                } else if (route.name === 'Surprise') {
                    iconName = focused ? 'ios-compass' : 'ios-compass-outline'
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Home" component={Homescreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Shopping" component={MyFridgeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Surprise" component={SurpriseMeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Settings" component={SettingScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

function App() {
const [user, setUser] = React.useState(null)
    
const authContext = React.useMemo(() => ({
    signUp: async data => {
        Alert.alert("Signing up", data)
    },
    signIn: async data => {
        Alert.alert("Navigating to sign in", data)
    },
    signOut: async () => {
        Alert.alert("Signing out", data)
    },
    signInGuest: async () => {
        setUser('Guest')
    }
}), []);

    return (
        <AuthContext.Provider value={authContext} >
            <NavigationContainer>
                <Stack.Navigator initialRouteName="StartScreen">
                    {user ? (
                        <>
                            <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
                                {props => <TabNavigator {...props} extraData={user} />}
                            </Stack.Screen>
                        </>
                    ) : (
                        <>
                           <Stack.Screen name="Start" component={StartScreen} options={{ title: "Welcome" }} />
                        </>
                    )}
            </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default App;