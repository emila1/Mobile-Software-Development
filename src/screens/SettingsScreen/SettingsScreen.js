import React, { useContext } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../AuthContext/AuthContext.js';
import { MealStyles } from '../../styles/global.js';

export default function SettingScreen(props) {

    const { signOut } = useContext(AuthContext)

    return (
        <SafeAreaView style={MealStyles.container, { alignItems: 'center', marginTop: '10%', flex: 1 }}>
            <Text style={MealStyles.green}>Settings</Text>
            <View style={{ paddingLeft: '30%', flex: 1, paddingRight: '30%' }} >
                <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => signOut()} >
                    <Text style={MealStyles.buttonGuestText} >SIGN OUT</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    );

}