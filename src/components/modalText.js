import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function FridgeModalText(props) {

    return (
        <View>
            <Text style={styles.header} >Your Fridge:</Text>
            <Text style={styles.text} >Here you can add every ingredient that you posses (or want to posses)</Text>
            <Text style={styles.text}>The checkbox defines whether you own an ingredient or not</Text>
            <Text style={styles.text}>If it is checked: recipes containing that ingredient will show in the 'Recipes' tab</Text>
            <Text style={styles.text}>Uncheck an ingredient to filter it from available recipes</Text>
            <Text style={styles.text}>You can remove an ingredient entirely from the list by pressing the 'Trash' icon</Text>
        </View>
    );

}

export function HelpModalText(props) {

    return (
        <View>
            <Text style={styles.header} >MealMe assistance</Text>
            <Text style={styles.text} >Browse through 500 delicious recipes to help you decide your dish</Text>
            <Text style={styles.text}>You can add ingredients to the 'Fridge' tab and MealMe will automatically help filter recipes that includes those ingredients</Text>
            <Text style={styles.text}>You can pin and unpin your favorite recipes to easily find them again, or remove all pinned recipes as well as remove every previously visited recipes</Text>
            <Text style={styles.text}>If you would like to indulge in the attractive and handy features of a premium account for 10$,
                you can register with an account and start now</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        padding: 12
    }
})