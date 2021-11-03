import * as React from 'react';
import { Text, View, Image, Button, StyleSheet, TextInput } from 'react-native';
import { MealStyles } from '../../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';




function MyFridge({navigation}) {
   

    return (
        
        <View style={MealStyles.container}>
            <Text style={MealStyles.green}>MyFridge</Text>
            
            <View style={MealStyles.fridgeAdd}>
                 <TextInput style={MealStyles.fridgeText} placeholder="Add new"/> 
                 <Icon style={MealStyles.Addicon} name="plus-circle" size={20} color="#A7A1A1" onPress={() => navigation.navigate('HomeScreen')}/>
                 
            </View > 

        </View>
    );
}

export default MyFridge;


