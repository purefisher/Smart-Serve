import React, {Component} from 'react';

export default class DrinkList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidUpdate() {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
          };

        fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+this.props.drink,
            requestOptions
          )
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() { 
        
        var elements = [0,1,2,3,4,5,6];
        
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
        <h1> Ingredients </h1></div>

        return (
        <div>
            <h1> Ingredients </h1>
            {this.props.drink}
            <br></br>
            {elements.map((value, index) => {
                 return (
                    <li key={index}>
                    {JSON.stringify(this.state.items["drinks"][0]["strIngredient"+index],null,'\t')}
                    {JSON.stringify(this.state.items["drinks"][0]["strMeasure"+index],null,'\t')}
                    </li>
                 );
            })}
        </div>
        );
}

}