import * as React from 'react';
import { Text, View, Image, Button, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './src/AuthContext/AuthContext';
import ingredients from './src/utils/ingredients.json'
import IngredientContext from './src/IngredientContext/IngredientContext';
import { HomeScreen, MyFridgeScreen, RecipeScreen, SettingScreen, StartScreen, RecipeInfoScreen } from './src/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'


const MainStack = createNativeStackNavigator();
const StackHome = createNativeStackNavigator();
const StackShopping = createNativeStackNavigator();
const StackFavorite = createNativeStackNavigator();
const StackSettings = createNativeStackNavigator();
const StackAuth = createNativeStackNavigator();
const StackRecipe = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const recievedIngredients = ingredients;


function HomeStack({ navigation }) {
    return (
        <StackHome.Navigator initialRouteName="HomeScreen" navigation={navigation}  >
            <StackHome.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <StackHome.Screen name="Recipe" component={RecipeScreen} />
        </StackHome.Navigator>
    )
}

function RecipieStack({ navigation }) {
    return (
        <StackRecipe.Navigator initialRouteName="RecipeScreen" navigation={navigation} >
            <StackRecipe.Screen name="RecipeScreen" component={RecipeScreen} options={{ headerShown: false }} />
            <StackRecipe.Screen name="RecipeInfoScreen" component={RecipeInfoScreen} options={{ headerShown: false }} />
        </StackRecipe.Navigator>
    )
}

//Implement Shopping Screen with MyFridge and ShoppingList screens nested. Change initialroute
function ShoppingStack({ navigation }) {
    return (

        <StackShopping.Navigator initialRouteName="Your Inventory" navigation={navigation} >
            <StackShopping.Screen name="Your Inventory" component={MyFridgeScreen} options={{ headerShown: false }} />
        </StackShopping.Navigator>
    )
}


function SettingsStack({ navigation }) {
    return (
        <StackSettings.Navigator initialRouteName="Setting" navigation={navigation} >
            <StackSettings.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
        </StackSettings.Navigator>
    )
}

function AuthStack({ navigation }) {
    return (
        // title not used because of hidden header, maybe "welcome" user in dom instead
        <StackAuth.Navigator navigation={navigation} initialRouteName="StartScreen" >
            <StackAuth.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
        </StackAuth.Navigator>
    )
}

function TabNavigator({ navigation, extraData }) {
    return (
        <Tab.Navigator initialRouteName="Home" navigation={navigation} screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'ios-home' : 'ios-home-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-circle' : 'ios-list';
                } else if (route.name === 'Fridge') {
                    iconName = focused ? 'basket' : 'basket-outline'
                } else if (route.name === 'Recipes') {
                    iconName = focused ? 'restaurant' : 'restaurant-outline'
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Home" >
                {props => <HomeStack {...props} extraData={extraData} />}
            </Tab.Screen>
            <Tab.Screen name="Fridge" component={ShoppingStack} />
            <Tab.Screen name="Recipes" component={RecipieStack} />
            <Tab.Screen name="Settings" >
                {props => <SettingsStack {...props} extraData={extraData} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

//const IngredientContext = React.createContext();


function App() {

    const [user, setUser] = React.useState(null)

    const authContext = React.useMemo(() => ({
        signUp: async data => {
            Alert.alert("Signing up", data)
        },
        signIn: async data => {
            Alert.alert("Navigating to sign in", data)
        },
        signOut: async () => {
            setUser(null)
        },
        signInGuest: async () => {
            setUser('Guest')

        }
    }), []);

    return (
        <IngredientContext.Provider value={recievedIngredients}>
            <AuthContext.Provider value={authContext} >
                <NavigationContainer>
                    <MainStack.Navigator initialRouteName="StartScreen" >
                        {user ? (
                            <>
                                <MainStack.Screen name="HomeScreen" options={{ headerShown: false }} >
                                    {props => <TabNavigator {...props} extraData={user} />}
                                </MainStack.Screen>
                            </>
                        ) : (
                            <>
                                <MainStack.Screen name="Start" options={{ headerShown: false }}>
                                    {props => <AuthStack {...props} />}
                                </MainStack.Screen>
                            </>
                        )}
                    </MainStack.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
        </IngredientContext.Provider>
    );
}

export default App;