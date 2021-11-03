import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homescreen, MyFridgeScreen, RecipeScreen, SettingScreen, StartScreen, SurpriseMeScreen, FavoritesScreen } from './src/screens'
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
            <StackHome.Screen name="Recipe" component={RecipeScreen} />
            <StackHome.Screen name="MyFridge" component={MyFridgeScreen} />
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
                tabBarActiveTintColor: 'darkorange',
                tabBarInactiveTintColor: 'orange',
            })}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Shopping" component={ShoppingStack} />
                <Tab.Screen name="Favorites" component={FavoriteStack} />
                <Tab.Screen name="Settings" component={SettingsStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;