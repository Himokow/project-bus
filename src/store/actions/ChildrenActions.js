import {
    ADD_CHILD,
    DELETE_CHILD,
    GET_CHILDREN,
    CHILDREN_ERROR,
    UPDATE_CHILD,
    UNCHECK_ALL_CHILDREN
} from '../types'
import axios from 'axios'

const api = process.env.REACT_APP_REACT_APP_API_URL? process.env.REACT_APP_REACT_APP_API_URL : process.env.REACT_APP_API_URL;

export const getChildren = () => async dispatch => {
    try{
        const res = await axios.get(`${api}/children`)
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
        const res = await axios.post(`${api}/children`,{
            firstName:child.firstName,
            lastName:child.lastName,
            phone:child.phone,
            school:child.school,
            stop:child.stop,
        })
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
        const res = await axios.delete(`${api}/children/${child.id}`)
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

export const updateChild = (child) => async dispatch => {
    try{
        const res = await axios.put(`${api}/children`,{
            id:child.id,
            firstName:child.firstName,
            lastName:child.lastName,
            phone:child.phone,
            school:child.school,
            stop:child.stop,
            back:child.back,
            present:child.present
        })
        dispatch({
            type: UPDATE_CHILD,
            payload:res.data
        })
    } catch (e) {
        dispatch( {
            type: CHILDREN_ERROR,
            payload: console.log(e),
        })
    }
}

export const uncheckAll = (children) => async dispatch => {
    try{
        children.map(c => {
            c.back=false
            c.present=false
        })
        const res = await axios.get(`${api}/children/uncheck`)
        dispatch({
            type: UNCHECK_ALL_CHILDREN,
            payload:res.data
        })
    } catch (e) {
        dispatch( {
            type: CHILDREN_ERROR,
            payload: console.log(e),
        })
    }
}