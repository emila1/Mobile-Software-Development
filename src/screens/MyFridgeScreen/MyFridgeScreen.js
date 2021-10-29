import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { MealStyles } from '../../styles/global';

function MyFridge() {
    return (
        <View style={MealStyles.container}>
            <Text style={MealStyles.green}>MyFridge Screen</Text>
        </View>
    );
}

export default MyFridge;