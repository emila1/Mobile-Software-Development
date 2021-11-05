import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';
import { MealStyles } from '../../styles/global';
import { getRandomRecipe } from '../../utils/search';
import Recepies from '../../../recipes/recipes.json';


class RecipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomRecipes: getRandomRecipe(10),
        };
    }

    render() {
        return (
            <SafeAreaView style={test.Container}>
                <FlatList
                    data={this.state.randomRecipes}
                    keyExtractor={item => this.state.randomRecipes.image_urls} // Only unique thing that can be used as key
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View></View>
                    }
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={test.touch}>

                            <Image style={test.image}
                                source={require('../../../recipes/full/00f1cf5a0611f25aeb447db5a3845602034d6813.jpg')}
                                resizeMode="cover"
                            />
                
                            <View>
                                <Text style={test.text}>{item.title}</Text>
                                <Text style={test.text}>{item.subtitle}</Text>
                                <Text style={test.text}>{item.head}</Text>
                            </View>
                
                
                        </TouchableOpacity>
                        )
                    }}
                />
            </SafeAreaView>
        );
    }
}

const test = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#C1553E'
    },
    touch: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 50
    },
    v: {
        width: '65%',
        paddingHorizontal: 20
    },
    text: {
        fontSize: 15,
        color: '#ffffff',
        paddingBottom: 1
    }
});

export default RecipeScreen;