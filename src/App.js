import React, {useState} from 'react';
import Axios from 'axios'
import Recipe from './conponents/Recipe'
import Alert from './conponents/Alert'
import {v4 as uuidv4} from 'uuid'
import './App.css'

const App = () => {
    const [query, setQuery] = useState('')
    const [recipes, setRecipe] = useState([])
    const [alert, setAlert] = useState('')
    const APP_ID = "becbe704"
    const APP_KEY = "adc3ba347824682c0a87f117f1282c48"
    //Change "" to backticks(template strings) to integrate ID and Key variables into the link
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    //function to call data from api

    const getData = async () => {
        if(query !== ''){
        const result = await Axios.get(url)
        if(!result.data.more){
            return setAlert("No such food exist in our database")
        }
        setRecipe(result.data.hits)
        console.log(result.data.hits)
        setQuery('')
        setAlert('')
        }else {
            setAlert("Please fill the search form")
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getData()
        
        
    }

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        
        <div className='App'>
            <h1>Recipe finder</h1>
            { alert !== '' && <Alert alert={alert}/> }
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