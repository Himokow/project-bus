import {ADD_STOP, DELETE_STOP, GET_STOPS, STOPS_ERROR} from '../types'
import axios from 'axios'

const api = process.env.REACT_APP_REACT_APP_API_URL ? process.env.REACT_APP_REACT_APP_API_URL : process.env.REACT_APP_API_URL;
export const getStops = () => async dispatch => {
console.log('here')

    try{
        const res = await axios.get(`${api}/stop`)
        dispatch( {
            type: GET_STOPS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: STOPS_ERROR,
            payload: console.log(e),
        })
    }

}

export const addStop = (stop) => async dispatch =>  {
    try {
        const res = await axios.post(`${api}/stop`,{name:stop.name,address:stop.address})
        dispatch({
            type: ADD_STOP,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: STOPS_ERROR,
            payload: console.log(e),
        })
    }
};

export const deleteStop = (stop) => async dispatch => {
    try{
        const res = await axios.delete(`${api}/stop/${stop.id}`)
        dispatch({
            type: DELETE_STOP,
            payload:stop.id
        })
    }
    catch(e){
        dispatch( {
            type: STOPS_ERROR,
            payload: console.log(e),
        })
    }
}