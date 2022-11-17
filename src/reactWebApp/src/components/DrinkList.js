import React, { Component } from 'react';
import DrinkListLetter from './DrinkListLetter'
import Ingredients from './Ingredients'

export default class DrinkList extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    handleCallback = (drink) => {
        this.setState({ strDrink: drink })
    }

    componentDidUpdate() {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        if (this.state.strDrink) {
            fetch(
                'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this?.state?.strDrink,
                requestOptions
            )
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        drink: json?.drinks?.[0],
                        strDrink: this?.state?.strDrink
                        // ...this.state
                    });
                })
        }

    }

    render() {
        return (
            <div>
                <div style={{textAlign: 'center', display:'flex', justifyContent:'center', fontFamily:'Garamond', boxShadow: '5px 5px 5px 5px lightgray', marginBottom: '20px', backgroundColor:'rgb(41, 120, 194)', color: 'white'}} ><h1 style={{width:'700px', fontFamily:'Garamond'}}> Smart Serve Menu </h1></div>
                <div style={{ display: 'flex'}}>
                    <div style={{ marginLeft: '120px', textAlign: 'center', width:'350px'}}>
                        <h1 style={{fontFamily:'Garamond'}}> Drinks </h1>
                        <DrinkListLetter varOne={"a"} parentCallback={this.handleCallback} />
                        {/* <DrinkListLetter varOne={"b"} parentCallback = {this.handleCallback}/>
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
                    <DrinkListLetter varOne={"t"} parentCallback = {this.handleCallback}/> */}
                    </div>
                    <div>
                        <div style={{ marginLeft: '325px', textAlign: 'center', boxShadow: '5px 5px 5px 5px lightgray', marginTop: '100px', height:'350px', width:'400px' }}>
                            <Ingredients drink={this?.state?.drink} strDrink={this?.state?.strDrink} />
                        </div >
                        <h1 style={{ marginLeft: '325px', textAlign: 'center', marginTop: '50px',  boxShadow: '5px 5px 5px 5px lightgray', fontFamily:'Garamond', cursor: 'pointer', borderRadius: '20px', fontSize: '25px', backgroundColor:'rgb(41, 120, 194)', color: 'white'}}>
                        ORDER
                        </h1>
                    </div>
                    
                </div>
                
            </div>
        );
    }

}