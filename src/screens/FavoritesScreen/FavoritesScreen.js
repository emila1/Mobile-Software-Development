import React from 'react';
import { View, Text } from 'react-native';
import { MealStyles } from '../../styles/global';

export default class FavoritesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        return (
         <View style={MealStyles.container}>
            <Text style={MealStyles.green}>Favorites Screen</Text>
        </View>
        );
    }
}
