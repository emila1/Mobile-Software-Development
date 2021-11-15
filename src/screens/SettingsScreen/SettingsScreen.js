import React, { useContext, useState } from 'react';
import { Button, Modal, Pressable, SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../AuthContext/AuthContext.js';
import { MealStyles } from '../../styles/global.js';
import { Entypo } from '@expo/vector-icons'

export default function SettingScreen(props) {

    const { signOut, signUp, signIn } = useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false)
    const user = props.route.params.user

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
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >MealMe app</Text>
                        <Text style={{ padding: 12 }} >Browse through 500 delicious recipes to help you decide your dish</Text>
                        <Text style={{ padding: 12 }}>You can add ingredients to the 'Fridge' tab and MealMe will automatically help filter recipes that includes those ingredients</Text>
                        <Text style={{ padding: 12 }}>You can pin and unpin your favorite recipes to easily find them again</Text>
                        <Text style={{ padding: 12 }}>If you would like to indulge in the attractive and handy features of a premium account for 10$,
                            you can register with an account and start now</Text>
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
            <View style={{ alignSelf: 'flex-end', paddingEnd: '5%', paddingTop: '8%' }} >
                <TouchableOpacity onPress={() => setModalVisible(true)} >
                    <Entypo name="help-with-circle" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: '30%', flex: 1, paddingRight: '30%', paddingBottom: '20%', justifyContent: 'center' }} >
                <Text style={{ paddingTop: '30%', fontSize: 18, textAlign: 'center' }} >Would you like to sign out from {user}?</Text>
                <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => signOut()} >
                    <Text style={MealStyles.buttonGuestText} >SIGN OUT</Text>
                </TouchableOpacity>
                {user == "Guest" ? (
                    <>
                        <Text style={{ paddingTop: '30%', fontSize: 18, textAlign: 'center' }} >Would you like to create a premium account?</Text>
                        <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => signUp()} >
                            <Text style={MealStyles.buttonGuestText} >CREATE ACCOUNT</Text>
                        </TouchableOpacity>

                        <Text style={{ paddingTop: '30%', fontSize: 18, textAlign: 'center' }}>Or if you already have a premium account:</Text>
                        <TouchableOpacity style={MealStyles.buttonGuest} onPress={() => signIn()} >
                            <Text style={MealStyles.buttonGuestText} >LOG IN</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                    </>
                )}

            </View>
        </SafeAreaView >

    );

}