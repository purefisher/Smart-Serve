import React, { Component } from 'react';

class DrinkIngredient extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                {this.props?.ingredient && <div key={Math.random()} className='w3-animate-opacity'>{this.props.ingredient}: {this.props.measure}<br></br></div>}
            </>
        )
    }
}

export default React.memo(DrinkIngredient);