import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image, TouchableOpacity } from 'react-native';
//import { MealStyles } from '../styles/global.js';
import recipes from '../../recipes/recipes.json';
import { Ionicons } from '@expo/vector-icons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const recipe = recipes;
class RecipeCard extends React.Component {

    state = {
        id: this.props.value,
        // size indicator to conditionally change styling
        size: this.props.size
    }

    constructor(props) {
        super(props);
        this.handleOnPress = this.handleOnPress.bind(this)
    }

    handleOnPress() {
        console.log("navigated!");
        this.props.navigation.navigate('RecipeInfoScreen', { index: this.state.id })
    }

    render() {
        if (this.state.size == "small") {
            return (
                <TouchableOpacity onPress={this.handleOnPress}>
                <View style={styles.cardContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: recipe[this.state.id].image_urls[0] }} />
                    <View
                        style={styles.textContainer}
                    >
                        <Text numberOfLines={2} style={styles.titleText}>{recipe[this.state.id].title}</Text>

                        <View style={styles.headTextContainer}>
                            <Ionicons name={'time'} color={'tomato'} />
                            <Text style={styles.headText}>{recipe[this.state.id].head[0]}</Text>
                            <Ionicons name={'hourglass'} color={'tomato'} />
                            <Text style={styles.headText}>{recipe[this.state.id].head[1]}</Text>
                            <Ionicons name={'people'} color={'tomato'} />
                            <Text style={styles.headText}>{recipe[this.state.id].head[2]}</Text>
                            <Ionicons name={'book'} color={'tomato'} />
                            <Text style={styles.headText}>{recipe[this.state.id].head[3]}</Text>
                        </View>

                    </View>
                </View>
                </TouchableOpacity>
            );
        } else if (this.state.size == "large") {
            return (
                <TouchableOpacity onPress={this.handleOnPress}>
                <View style={styles.largeCardContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: recipe[this.state.id].image_urls[0] }} />
                    <View
                        style={styles.largeTextContainer}
                    >
                        <Text numberOfLines={2} style={styles.largeTitleText}>{recipe[this.state.id].title}</Text>

                        <View style={styles.headTextContainer}>
                            <Ionicons name={'time'} color={'tomato'} size={16} />
                            <Text style={styles.largeHeadText}>{recipe[this.state.id].head[0]}</Text>
                            <Ionicons name={'hourglass'} color={'tomato'} size={16} />
                            <Text style={styles.largeHeadText}>{recipe[this.state.id].head[1]}</Text>
                            <Ionicons name={'people'} color={'tomato'} size={16} />
                            <Text style={styles.largeHeadText}>{recipe[this.state.id].head[2]}</Text>
                            <Ionicons name={'book'} color={'tomato'} size={16} />
                            <Text style={styles.largeHeadText}>{recipe[this.state.id].head[3]}</Text>
                        </View>

                    </View>
                </View>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: windowWidth * 0.02,
        width: windowWidth * 0.7,
        height: windowHeight * 0.25,
        resizeMode: 'contain',
        borderColor: '#007060',         // Same color as backgroundColor
        borderRadius: 20,
        shadowColor: "black",
        elevation: 7,
        overflow: 'hidden',
        // Android only, needs ios support https://stackoverflow.com/questions/55015715/react-native-drop-shadow
    },
    largeCardContainer: {
        margin: windowWidth * 0.02,
        width: windowWidth * 0.9,
        height: windowHeight * 0.35,
        resizeMode: 'contain',
        borderColor: '#007060',         // Same color as backgroundColor
        borderRadius: 20,
        shadowColor: "black",
        elevation: 7,
        overflow: 'hidden',
        // Android only, needs ios support https://stackoverflow.com/questions/55015715/react-native-drop-shadow
    },
    largeTextContainer: {
        backgroundColor: '#fff',
        position: 'absolute',
        paddingLeft: '10%',
        paddingRight: '10%',
        height: windowHeight * 0.35 * 0.35,
        width: windowWidth * 0.9,
        bottom: 0,
    },
    textContainer: {
        backgroundColor: '#fff',
        position: 'absolute',
        paddingLeft: '10%',
        paddingRight: '10%',
        height: windowHeight * 0.25 * 0.35,
        width: windowWidth * 0.7,
        bottom: 0,
    },
    largeTitleText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        bottom: 0,
        left: 0,
    },
    titleText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        bottom: 0,
        left: 0,
    },
    headTextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: '13%',
        position: 'absolute',
        bottom: 0
    },
    largeHeadText: {
        color: 'black',
        fontSize: 15,
        padding: 3
    },
    headText: {
        color: 'black',
        fontSize: 12,
        padding: 3
    },
    image: {
        height: windowHeight * 0.25,
    }

})

export default RecipeCard;
