import {ADD_SCHOOL, DELETE_SCHOOL, GET_SCHOOLS, SCHOOLS_ERROR} from '../types'
import axios from 'axios'

export const getSchools = () => async dispatch => {
    console.log('here')
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/school`)
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
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/school`,{name:school.name,address:school.address})
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
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/school/${school.id}`)
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