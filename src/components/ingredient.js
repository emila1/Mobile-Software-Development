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
        element : this.props.value
    }

    constructor(props) {
        super(props);
        this.handlePress.bind(this);
    }

    handlePress() {
        console.log("Item clicked", this);
    }
    
    render() {

        return(
            <View style={styles.listContainer}> 
                <CheckBox 
                    value={this.state.element.owned}
                    tintColors={{ true: '#F15927', false: 'black' }} 
                />
                <Text style={styles.textContainer}>{this.state.element.name}</Text>
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
    }
});

export default Ingredient;
