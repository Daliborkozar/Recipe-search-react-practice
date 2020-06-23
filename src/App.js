import React, {useState} from 'react';
import Axios from 'axios'
import Recipe from './conponents/Recipe'
import {v4 as uuidv4} from 'uuid'
import './App.css'

const App = () => {
    const [query, setQuery] = useState('')
    const [recipes, setRecipe] = useState([])
    const APP_ID = "becbe704"
    const APP_KEY = "adc3ba347824682c0a87f117f1282c48"
    //Change "" to backticks(template strings) to integrate ID and Key variables into the link
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    //function to call data from api

    const getData = async () => {
        const result = await Axios.get(url)
        setRecipe(result.data.hits)
        console.log(result.data.hits)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getData()
        setQuery("")
        
    }

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        
        <div className='App'>
            <h1>Recipe finder</h1>
            <form className="form-wrapper cf" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Search"
                onChange={onChange}
                value={query}
                />
                <button type='submit' value="search">Search</button>
            </form>

            <div className="recipes">
                {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe}/>)}
            </div>
        </div>
        );
}



export default App;