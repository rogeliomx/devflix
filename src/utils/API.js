import axios from 'axios';

const searchShow= (search) => {
        return axios.get(`http://api.tvmaze.com/search/shows?q=${search}`)
    }

const searchCast = () => {
    
}
export {
    searchShow,
    searchCast
}

