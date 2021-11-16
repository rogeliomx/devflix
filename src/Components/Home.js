import React, { useEffect, useState }from 'react';
import ResultList from './ResultList'
import { searchShow } from '../utils/API'
import useDebounce from '../Hooks/useDebounce'
import  './Styles.css'


function Home(){
    const [search, setSearch] = useState ('');
    const [results , setResults] = useState([])
    const searchTerm = useDebounce (search,500)
    const makeSearch = (s) => {
        searchShow (search).then((response) => {
            setResults(response.data)
        }).catch ( () => {
            setResults([])
        })
    }

    useEffect(() => {
        if (searchTerm){
            console.log('Valor Final -->', searchTerm)
            makeSearch(searchTerm)
        }
    }, [searchTerm])
    return(

    <div className="main">
        <h1>DevFlix</h1>
        <div className="search-box">
            <input id= "buscador" 
            type="text" 
            name="search"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
            />
            {/* <button type="button" onClick={makeSearch}>Buscar</button>         */}
            
        </div>
        <ResultList results={results}/>
    </div>
    )
}

export default Home;