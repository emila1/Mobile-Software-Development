import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function RecipeCardLoading() {
    return (
        <View style={styles.cardContainer} >
            <ContentLoader active pRows={3}
                pHeight={[100, 25, 10]}
                pWidth={[260, 150, 200]}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        margin: windowWidth * 0.02,
        width: windowWidth * 0.7,
        height: windowHeight * 0.25,
    },
})
