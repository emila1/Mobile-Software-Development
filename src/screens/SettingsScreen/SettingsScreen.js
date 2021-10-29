import * as React from 'react';
import { Text, View } from 'react-native';
import { MealStyles } from '../../styles/global.js';

function SettingScreen() {
    return (
        <View style={MealStyles.container}>
            <Text style={MealStyles.green}>Settings</Text>
        </View>
    );
}

export default SettingScreen;