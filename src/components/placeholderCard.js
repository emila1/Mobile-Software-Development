import * as React from 'react';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export class PlaceholderCard extends React.Component {
    state = {
        mainText : this.props.mainText,
        secondaryText : this.props.secondaryText,
    }

    render() {
        return (
            <View style={styles.cardContainer} >
                <Text style={styles.mainText}> {this.state.mainText} </Text>
                <Text style={styles.secondaryText}> {this.state.secondaryText} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: windowWidth * 0.02,
        width: windowWidth * 0.7,
        height: windowHeight * 0.25,
        borderRadius: 20,
        backgroundColor: "#B0B0B0",
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        shadowColor: "black",
        elevation: 7,
    },
    mainText: {
        color:'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    secondaryText: {
        color:'black',
        fontSize: 14,
    }
})