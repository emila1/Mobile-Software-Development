import React from 'react';
import { StyleSheet, Dimensions, Text, View, CheckBox} from 'react-native';
import IngredientContext from '../IngredientContext/IngredientContext';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
import { Ionicons } from '@expo/vector-icons'

class Ingredient extends React.Component {
    //static contextType = IngredientContext;

    state = {
        element : this.props.value,
        // ingredientName state from element state
        //ingredientName : this.props.value.name,
        // owned state from element state
        //owned : this.props.value.owned,
        //ingredientName : this.state.element.name,
        //owned: this.state.element.owned,
    }


     constructor(props) {
        super(props);
        console.log('From ingredient!:', this.state.element);
        //this.handlePress.bind(this);
    } 

    handlePress() {
        console.log("Item clicked", this);
    }
    
    render() {

        return(
            <View style={styles.listContainer}> 
                <CheckBox 
                    value={this.state.owned}
                    tintColors={{ true: '#F15927', false: 'black' }}
                    onPress={this.props.handleOwned}
                    //onpress={() => this.setState({owned: !this.state.owned})}
                />
                <Text style={styles.textContainer}>{this.state.ingredientName}</Text>
                <Ionicons onPress={this.handlePress} style={styles.icon} name="trash" color={'tomato'} />
            </View>
        );
    }
} 

const styles = StyleSheet.create({  
    listContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    textContainer: {
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
        paddingTop: '1%',
        paddingLeft: '5%',
        fontSize: 20,
    },
    underline: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        paddingTop: '1%',
        paddingLeft: '5%',
        fontSize: 20,
    },
    icon: {
        paddingLeft: '5%',
        fontSize: 18,
    }
});

export default Ingredient;
