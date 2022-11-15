import React, {Component} from 'react';

export default class DrinkListLetter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {

        const requestOptions = {
            method: "GET",
            redirect: "follow",
          };

        fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='+this.props.varOne,
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
        const ingredients = (strDrink) => {
            this.props.parentCallback(strDrink);
        }
          
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
        return (
        <div>
            {this.state.items["drinks"].map(d => (<li onClick={() => ingredients(d.strDrink)} key={d.idDrink}>{d.strDrink}</li>))}
        </div>
        );
}

}