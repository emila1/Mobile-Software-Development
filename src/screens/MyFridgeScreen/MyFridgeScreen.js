import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, SectionList, Modal } from 'react-native';
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
            value: '',
            modalVisible: false,
            title: ''
        };
    }


    setModalVisible = (visible, title) => {
        this.setState({ title: title })
        this.setState({ modalVisible: visible });
        this.setState({ value: '' })
    }

    onChangeValue = event => {
        this.setState({ value: event.nativeEvent.text });
    };

    onAddItem = () => {
        console.log(this.state.title)
        if (this.state.value != '') {

            this.state.fridgeItems.forEach(element => {
                if ((element.title == this.state.title) && !element.data.includes(this.state.value)) {
                    console.log("Specific", element)
                    this.setState(state => {
                        console.log("state: " + [...state.fridgeItems])
                        element.data = [...element.data, state.value]
                    })
                }
            })
            this.setModalVisible(!this.state.modalVisible, '')
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
        return (

            <View style={MealStyles.fridgeContainer} >
                {/* <View style={MealStyles.fridgeInputContainer}>
                    <TextInput style={MealStyles.fridgeInput}
                        placeholder='Add an item to your fridge'
                        value={this.state.value}
                        onChange={this.onChangeValue.bind(this)} />
                    <TouchableOpacity onPress={() => this.onAddItem()} >
                        <AntDesign name='pluscircle' size={30} color={'green'} />
                    </TouchableOpacity>
                </View> */}
                <Modal

                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible)
                    }}>
                    <View style={MealStyles.fridgeModalView} >
                        <View style={MealStyles.fridgeInputModal} >
                            <TextInput style={MealStyles.fridgeInput}
                                placeholder='Add an item to your fridge'
                                value={this.state.value}
                                onChange={this.onChangeValue.bind(this)} />
                            <TouchableOpacity onPress={() => this.onAddItem()} >
                                <Ionicons name='checkmark' size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <SectionList
                    sections={this.state.fridgeItems}
                    keyExtractor={(item, index) => item + index}
                    nestedScrollEnabled={true}
                    renderItem={({ item, index }) => <Item title={item} index={index} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={MealStyles.fridgeInputContainer} >
                            <Text style={{ fontSize: 30 }} >{title}</Text>
                            <TouchableOpacity onPress={() =>
                                //this.onAddItem()
                                this.setModalVisible(true, title)
                            } >
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
