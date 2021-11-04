import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { MealStyles } from '../../styles/global.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
        <View style={MealStyles.container}>
            <Text style={MealStyles.green}>More</Text>

        
            <View style={MealStyles.Settingicons}>
                <Icon style={MealStyles.icons} name="user-circle" size={20} color="gray"/>
                <Text style={MealStyles.iconsText}>Profile</Text>
                {/* <Icon name="angle-right" size={20} color="gray"/> */}
            </View>

            <View style={MealStyles.Settingicons}>
                <Icon style={MealStyles.icons} name="cog" size={21} color="gray"/>
                <Text style={MealStyles.iconsText}>Settings</Text>
            </View>

            <View style={MealStyles.Settingicons}>
                <Icon style={MealStyles.icons} name="question-circle" size={21} color="gray"/>
                <Text style={MealStyles.iconsText}>Help</Text>
            </View>

            <View style={MealStyles.Settingicons}>
                <Icon style={MealStyles.icons} name="comment" size={21} color="gray"/>
                <Text style={MealStyles.iconsText}>FAQ</Text>
            </View>

            <View style={MealStyles.Settingicons}>
                <Icon style={MealStyles.icons} name="user-md" size={22} color="orange"/>
                <Text style={MealStyles.iconsText}>Become a PRO</Text>
            </View>
            
        </View>
        );
    }
}