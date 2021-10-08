import 'react-native-gesture-handler'
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Homescreen, Recipescreen } from './src/screens'



const HomeStack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Homescreen} />
            <Drawer.Screen name="Recipe" component={Recipescreen} />
        </Drawer.Navigator>
    )
}

//det er vores UI i React Native
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Homescreen} />
                <Drawer.Screen name="Recipe" component={Recipescreen} />
            </Drawer.Navigator>
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