import React, { Component } from 'react';
import DrinkIngredient from './DrinkIngredient';

class Ingredients extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { drink } = this.props;

        return (
            <div>
                <h1 style={{fontFamily:'Garamond'}}>Ingredients</h1>
                <h2 style={{ textAlign: 'center', fontFamily:'Garamond'}}>{this.props.strDrink}</h2>
                <div>
                    <DrinkIngredient ingredient={drink?.strIngredient1} measure={drink?.strMeasure1} />
                    <DrinkIngredient ingredient={drink?.strIngredient2} measure={drink?.strMeasure2} />
                    <DrinkIngredient ingredient={drink?.strIngredient3} measure={drink?.strMeasure3} />
                    <DrinkIngredient ingredient={drink?.strIngredient4} measure={drink?.strMeasure4} />
                    <DrinkIngredient ingredient={drink?.strIngredient5} measure={drink?.strMeasure5} />
                    <DrinkIngredient ingredient={drink?.strIngredient6} measure={drink?.strMeasure6} />
                    <DrinkIngredient ingredient={drink?.strIngredient7} measure={drink?.strMeasure7} />
                    <DrinkIngredient ingredient={drink?.strIngredient8} measure={drink?.strMeasure8} />
                    <DrinkIngredient ingredient={drink?.strIngredient9} measure={drink?.strMeasure9} />
                    <DrinkIngredient ingredient={drink?.strIngredient10} measure={drink?.strMeasure10} />
                    {/* <DrinkIngredient ingredient={drink?.strIngredient1} measure={drink?.strMeasure1}/>
                    <DrinkIngredient ingredient={drink?.strIngredient1} measure={drink?.strMeasure1}/>
                    <DrinkIngredient ingredient={drink?.strIngredient1} measure={drink?.strMeasure1}/>
                    <DrinkIngredient ingredient={drink?.strIngredient1} measure={drink?.strMeasure1}/>
                    <DrinkIngredient ingredient={drink?.strIngredient1} measure={drink?.strMeasure1}/>
                    <DrinkIngredient ingredient={drink?.strIngredient1} measure={drink?.strMeasure1}/> */}

                </div>

                {/* {this.state?.items?.map((item, index)=>{
                return(
                    <div key={index}>
                        {item?.drinks?.[0]?.strIngredient1}
                    </div>
                )
            })} */}
                {/* {elements.map((value, index) => {
                 return (
                    <li key={index}>
                    {JSON.stringify(this.state.items["drinks"][0]["strIngredient"+index],null,'\t')}
                    {JSON.stringify(this.state.items["drinks"][0]["strMeasure"+index],null,'\t')}
                    </li>
                 );
            })} */}
            </div>
        );
    }

}

export default React.memo(Ingredients)