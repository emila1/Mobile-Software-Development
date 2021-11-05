import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, SectionList } from 'react-native';
import { MealStyles } from '../../styles/global';
import { Ionicons, AntDesign } from '@expo/vector-icons'

export default class MyFridge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fridgeItems: [
                {
                    title: "Meat",
                    data: ["Chicken", "Beef", "Lamb"]
                }, {
                    title: "Dairy",
                    data: ["Milk", "Egg", "Butter"]
                }, {
                    title: "Vegetables",
                    data: ["Green Beans", "Onions", "Carrots"]
                }, {
                    title: "Misc",
                    data: ["Wheat Flour", "Sugar", "Salt", "Peper"]
                }
            ],
            value: ''
        };

    }

    onChangeValue = event => {
        this.setState({ value: event.nativeEvent.text });
    };

    onAddItem = () => {
        if (this.state.value != '') {
            if (!this.state.fridgeItems.includes(this.state.value)) {

                this.setState(state => {
                    const fridgeItems = state.fridgeItems.concat(state.value);
                    return {
                        fridgeItems,
                        value: '',
                    };
                });
            } else {
                Alert.alert("Item already exists")
            }
        }
    };

    onRemoveItem = i => {
        console.log("Item", i)
        this.setState(state => {
            const fridgeItems = state.fridgeItems.filter((item, j) => i !== j);
            return {
                fridgeItems,
            };
        });
    };

    render() {
        const Item = ({ title, index }) => (
            <View style={MealStyles.fridgeItem} >
                <Text style={{ textAlign: 'left', fontSize: 20 }} >{title}</Text>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() =>
                    this.onRemoveItem(index)}>
                    <Ionicons name='ios-trash-sharp' size={20} color={'black'} />
                </TouchableOpacity>
            </View >
        )
        console.log(this.state)
        return (

            <View style={MealStyles.fridgeContainer} >
                <Text style={MealStyles.green} > Your inventory </Text>
                {/* <View style={MealStyles.fridgeInputContainer}>
                    <TextInput style={MealStyles.fridgeInput}
                        placeholder='Add an item to your fridge'
                        value={this.state.value}
                        onChange={this.onChangeValue.bind(this)} />
                    <TouchableOpacity onPress={() => this.onAddItem()} >
                        <AntDesign name='pluscircle' size={30} color={'green'} />
                    </TouchableOpacity>
                </View> */}
                <SectionList
                    sections={this.state.fridgeItems}
                    keyExtractor={(item, index) => item + index}
                    nestedScrollEnabled={true}
                    renderItem={({ item, index }) => <Item title={item} index={index} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={MealStyles.fridgeInputContainer} >
                            <Text style={{ fontSize: 30 }} >{title}</Text>
                            <TouchableOpacity onPress={() => this.onAddItem()} >
                                <AntDesign name='pluscircle' size={30} color={'green'} />
                            </TouchableOpacity>
                        </View>
                    )} />
                {/* <ScrollView style={{ marginLeft: 15 }} >
                    {this.state.fridgeItems.map((item, index) =>
                        <View style={MealStyles.fridgeItem} key={index} >
                            <Text style={{ textAlign: 'left', fontSize: 20 }}  >{item}</Text>
                            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.onRemoveItem(index)} >
                                <Ionicons name='ios-trash-sharp' size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView> */}
            </View>
        );
    }
}
