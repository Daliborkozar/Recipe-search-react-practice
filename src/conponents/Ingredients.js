import React from 'react';
import {v4 as uuidv4} from 'uuid'

const Ingredients = ({ingredients}) => {
    
    return ingredients.map(ingrediant => {
        const num = ingrediant.weight
        return(
            <ul key={uuidv4()} className='ingredient-list'>
                <li className='ingredient-text'>{ingrediant.text}</li>
                <li className='ingredient-weight'>weight - {Math.round(num * 100) / 100}g</li>
            </ul>
        )
    })
}



export default Ingredients;