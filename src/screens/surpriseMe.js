import * as React from 'react';
import {Text, View, Image, Button, StyleSheet} from 'react-native';
import {MealStyles} from '../styles/global.js';
import Icon from 'react-native-vector-icons/FontAwesome';



function SurpriseMe({ navigation }) {
    return(
        <View style={MealStyles.container}>
            <Text style={MealStyles.green}>Surprise Me </Text>

            <View style={MealStyles.Tab}>
                <View>
                    <Icon style={MealStyles.icons} name="map-pin" size={30} color="#FF9D0A" onPress={() => navigation.navigate('Recipe')}/>
                </View>

                <View>
                    <Icon style={MealStyles.icons} name="plus-circle" size={30} color="#FF9D0A" onPress={() => navigation.navigate('Recipe')}/>
                </View>

                <View>
                    <Icon style={MealStyles.icons} name="share-square" size={30} color="#FF9D0A" onPress={() => navigation.navigate('Recipe')}/>
                </View>

                <View>
                    <Icon style={MealStyles.icons} name="print" size={30} color="#FF9D0A" onPress={() => navigation.navigate('Recipe')}/>
                </View>

                <View>
                    <Icon style={MealStyles.icons} name="ellipsis-h" size={30} color="#FF9D0A" onPress={() => navigation.navigate('Setting')}/>
                </View>
            </View>
        </View>
    );
}

export default SurpriseMe;