import {ADD_CHILD, DELETE_CHILD, GET_CHILDREN, CHILDREN_ERROR} from '../types'
import axios from 'axios'
import {Add} from "@material-ui/icons";

export const getChildren = () => async dispatch => {
    console.log('here')
    try{
        const res = await axios.get(`http://localhost:3001/children`)
        dispatch( {
            type: GET_CHILDREN,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: CHILDREN_ERROR,
            payload: console.log(e),
        })
    }

}

export const addChild = (child) => async dispatch =>  {
    try {
        const res = await axios.post(`http://localhost:3001/children`,{})
        dispatch({
            type: ADD_CHILD,
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type: CHILDREN_ERROR,
            payload: console.log(e),
        })
    }
};

export const deleteChild = (child) => async dispatch => {
    try{
        const res = await axios.delete(`http://localhost:3001/children/${child.id}`)
        dispatch({
            type: DELETE_CHILD,
            payload:child.id
        })
    }
    catch(e){
        dispatch( {
            type: CHILDREN_ERROR,
            payload: console.log(e),
        })
    }
}