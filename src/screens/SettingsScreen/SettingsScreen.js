import React, { useContext, useState } from 'react';
import { Button, Modal, Pressable, SafeAreaView, Text, View, Switch, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../AuthContext/AuthContext.js';
import { MealStyles } from '../../styles/global.js';
import { Entypo } from '@expo/vector-icons';
import { HelpModalText } from '../../components/modalText.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingScreen(props) {


    const { signOut, signUp, signIn } = useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const user = props.route.params.user

    const clearPinned = async () => {
        try {
            await AsyncStorage.removeItem('pinnedRecipes')
            // To prevent null when evaluating 'this.state.pinnedRecipeIndexes.map' in HomeScreen:
            await AsyncStorage.setItem('pinnedRecipes', JSON.stringify([]))
        } catch (error) {
            console.log(error)
        }
    }

    const clearViewed = async () => {
        try {
            await AsyncStorage.removeItem('viewedRecipes')
            // To prevent null when evaluating 'this.state.viewedRecipeIndexes.map' in HomeScreen:
            await AsyncStorage.setItem('viewedRecipes', JSON.stringify([]))
        } catch (error) {
            console.log(error)
        }
    }

    const clearPinnedAlert = () => Alert.alert(
        "Remove every pinned recipe",
        "Are you sure you want to remove every pinned recipe?\nYou will have to repin each one again", [
        {
            text: "No",
            //onPress: () => console.log("Cancel"),
            style: "cancel"
        }, {
            text: "Yes",
            onPress: () => clearPinned(),
            style: 'destructive'
        }
    ]
    )

    const clearViewedAlert = () => Alert.alert(
        "Remove every viewed recipe",
        "Are you sure you want to remove every viewed recipe?", [
        {
            text: "No",
            //onPress: () => console.log("Cancel"),
            style: "cancel"
        }, {
            text: "Yes",
            onPress: () => clearViewed(),
            style: 'destructive'
        }
    ]
    )

    return (
        <SafeAreaView style={MealStyles.container, { alignItems: 'center', marginTop: '10%', flex: 1 }}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22
                }} >
                    <View style={{
                        margin: 20,
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 35,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        }
                    }} >
                        <HelpModalText />
                        <Pressable style={{
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2
                        }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={MealStyles.green}>Settings</Text>
            <Text style={{ textDecorationLine: 'underline' }} >Signed in as {user}</Text>
            <View style={{ alignContent: 'space-around', width: '80%', flexDirection: 'row', paddingTop: '8%' }} >
                <View style={{ flex: 1, alignItems: 'baseline' }} >
                    <Text>Switch Theme</Text>
                    <Switch
                        trackColor={{ false: "#81b0ff", true: "#767577" }}
                        thumbColor={isEnabled ? "#483d8b" : "#f5dd4b"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                    <TouchableOpacity onPress={() => setModalVisible(true)} >
                        <Entypo name="help-with-circle" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingLeft: '30%', flex: 1, paddingRight: '30%', paddingBottom: '20%', justifyContent: 'space-evenly' }} >
                <Text style={{ paddingTop: '20%', fontSize: 18, textAlign: 'center' }} >Remove pinned recipes:</Text>
                <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => clearPinnedAlert()} >
                    <Text style={MealStyles.buttonGuestText} >CLEAR PINNED</Text>
                </TouchableOpacity>
                <Text style={{ paddingTop: '20%', fontSize: 18, textAlign: 'center' }} >Remove viewed recipes:</Text>
                <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => clearViewedAlert()} >
                    <Text style={MealStyles.buttonGuestText} >CLEAR VIEWED</Text>
                </TouchableOpacity>
                {user == "Guest" ? (
                    <>
                        <Text style={{ paddingTop: '20%', fontSize: 18, textAlign: 'center', paddingBottom: '10%', }}>Log in to account:</Text>
                        <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => signIn()} >
                            <Text style={MealStyles.buttonGuestText} >LOG IN</Text>
                        </TouchableOpacity>
                        <Text style={{ paddingTop: '20%', fontSize: 18, textAlign: 'center', paddingBottom: '10%', }} >Create an account:</Text>
                        <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => signUp()} >
                            <Text style={MealStyles.buttonGuestText} >CREATE ACCOUNT</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                    </>
                )}
                <Text style={{ paddingTop: '20%', fontSize: 18, textAlign: 'center' }} >Sign out from {user}:</Text>
                {/* <View style={{ paddingLeft: '30%', flex: 1, paddingRight: '30%', justifyContent: 'center' }} > */}
                <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => signOut()} >
                    <Text style={MealStyles.buttonGuestText} >SIGN OUT</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    );

}