import React from 'react';
import ingredients from '../utils/ingredients.json'

const IngredientContext = React.createContext();

export class IngredientProvider extends React.Component {

    // State updater here

    render() { 
        const { name, amount, owned } = this.state;

        return (
            <IngredientContext.Provider value={ 
                name,
                amount,
                owned
            }>
                {this.props.children}
            </IngredientContext.Provider>
        );
    }
}
 
export default IngredientContext;
/* 
class IngredientProvider extends React.Component {
    state = {
        name: "",
        amount: "",
        owned: false,
    }

    


    render() { 
        const {name, amount, owned} = this.state;
        // const for functions here
        return (
            <IngredientContext.Provider value={
                name,
                amount, 
                owned
                // functions provided here
            }>
                {this.props.children}
            </IngredientContext.Provider>
        )
    }
} */
 
