import React, {useState} from 'react';
import Ingrediants from './Ingredients'

const Recipe = ({recipe}) => {
    const [show, setShow] = useState(false)
    const {label,image,ingredients,url} = recipe.recipe

    const handleToggle = () => {
        setShow(!show)
    }
    return (
    <div className='recipe'>
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <a href={url} target="_blank" rel="noopener noreferer">LINK</a>
        <button onClick={handleToggle}>Ingredients</button>
        {show && <Ingrediants ingredients={ingredients}/>}

    </div>
    )
}

export default Recipe;