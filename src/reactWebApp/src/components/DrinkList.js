import React, {Component} from 'react';
import DrinkListLetter from './DrinkListLetter'
import Ingredients from './Ingredients'

export default class DrinkList extends Component {

    state = {
        strDrink: "",
    }

    handleCallback = (drink) =>{
        this.setState({strDrink: drink})
    }

    render() {
        const {strDrink} = this.state;

        return (
        <div>
            <h1> List of Drinks</h1>
            <div className='rowC'>
                <div>
                    <DrinkListLetter varOne={"a"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"b"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"c"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"d"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"e"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"f"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"g"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"h"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"i"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"j"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"k"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"l"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"m"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"n"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"o"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"p"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"q"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"r"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"s"} parentCallback = {this.handleCallback}/>
                    <DrinkListLetter varOne={"t"} parentCallback = {this.handleCallback}/>
                </div>
                <Ingredients drink = {strDrink}/>
            </div>
        </div>
    );
}

}