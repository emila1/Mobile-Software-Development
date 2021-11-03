import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { MealStyles } from '../../styles/global';
import { SearchBar } from 'react-native-elements';


function RecipeScreen() {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={MealStyles.container}>
            <Text style={MealStyles.green}>Recipe</Text>

        </View>

        
    );
}


export default RecipeScreen;
