import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//det er vores UI i React Native
export default function App() {
    return ( 
        <View style = { styles.container }>
        <Text> Welcome to our MealMe App </Text> 
        </View>
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