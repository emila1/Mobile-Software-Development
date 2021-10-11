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

function HomeStack({ navigation }) {
    return (
        <StackHome.Navigator initialRouteName="Home" navigation={navigation} screenOptions={{ headerShown: false }} >
            <StackHome.Screen name="Home" component={Homescreen} />
            <StackHome.Screen name="Recipe" component={Recipescreen} options={{ title: "Recipe" }} />
        </StackHome.Navigator>
    )
}

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
});