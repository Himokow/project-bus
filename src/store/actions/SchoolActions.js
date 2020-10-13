import {ADD_SCHOOL, DELETE_SCHOOL, GET_SCHOOLS, SCHOOLS_ERROR} from '../types'
import axios from 'axios'

    const api = process.env.REACT_APP_REACT_APP_API_URL ? process.env.REACT_APP_REACT_APP_API_URL : process.env.REACT_APP_API_URL;
export const getSchools = () => async dispatch => {
    try{
        const res = await axios.get(`${api}/school`)
        dispatch( {
            type: GET_SCHOOLS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: SCHOOLS_ERROR,
            payload: console.log(e),
        })
    }

}

export const addSchool = (school) => async dispatch =>  {
    try {
        const res = await axios.post(`${api}/school`,{name:school.name,address:school.address})
        dispatch({
            type: ADD_SCHOOL,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: SCHOOLS_ERROR,
            payload: console.log(e),
        })
    }
};

export const deleteSchool = (school) => async dispatch => {
    try{
        const res = await axios.delete(`${api}/school/${school.id}`)
        dispatch({
            type: DELETE_SCHOOL,
            payload:school.id
        })
    }
    catch(e){
        dispatch( {
            type: SCHOOLS_ERROR,
            payload: console.log(e),
        })
    }
}