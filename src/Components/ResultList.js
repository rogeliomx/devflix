import React, { useState, useEffect} from 'react';
import  './Styles.css'


function ResultList (props){
    const [results, setResults] = useState (props.results)

    useEffect (() => {
        // se va a jecuatar cuando se carga el componente o hay un cambio en props resutls

        setResults(props.results)
    },[props.results])

    return props.results.length > 0 ? (
        <div id='lista' className="result-list">
            {
                results.map( 
                    ({show}) => (
                    <card className="carta">
                    
                    <h2>
                        {show.name}
                    </h2>
                    
                    <img src={show.image.original}/>
                    {/* <img src={show.image.medium.original}/> */}

                    <p>
                        {show.summary}
                    </p>

                    <small>
                        ID: {show.id}
                    </small>   
                        {show.genre} 
                     <small>  
                        Type: {show.type}
                    </small>

                    <small>  
                        Duration: {show.runtime} Minutes
                    </small>
                    <small>  
                        Genres: {show.genres}
                    </small>
                    <small>  
                        Year: {show.premiered}
                    </small>

                    </card>
                ))
            }
        </div>


    ) : ( <h2> No encontramos nada al respecto </h2> )
}

export default ResultList;