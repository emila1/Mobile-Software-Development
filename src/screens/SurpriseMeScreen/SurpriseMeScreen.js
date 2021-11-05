import React, { useContext } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { MealStyles } from '../../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

export default class SurpriseMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={MealStyles.container}>
                <Text style={MealStyles.green}>Surprise Me </Text>
                <Text> The buttons at the bottom are not usable </Text>

                <View style={MealStyles.Tab}>
                    <View>
                        <Icon style={MealStyles.icons} name="map-pin" size={30} color="#FF9D0A" onPress={() => navigation.navigate('Recipe')} />
                    </View>

                    <View>
                        <Icon style={MealStyles.icons} name="plus-circle" size={30} color="#FF9D0A" onPress={() => navigation.navigate('Recipe')} />
                    </View>

                    <View>
                        <Icon style={MealStyles.icons} name="share-square" size={30} color="#FF9D0A" onPress={() => navigation.navigate('Recipe')} />
                    </View>

                    <View>
                        <Icon style={MealStyles.icons} name="print" size={30} color="#FF9D0A" onPress={() => navigation.navigate('Recipe')} />
                    </View>

                    <View>
                        <Icon style={MealStyles.icons} name="ellipsis-h" size={30} color="#FF9D0A" onPress={() => navigation.navigate('Setting')} />
                    </View>
                </View>
            </View>
        );
    }
}
