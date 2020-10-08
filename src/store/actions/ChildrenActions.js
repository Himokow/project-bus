import {
    ADD_CHILD,
    DELETE_CHILD,
    GET_CHILDREN,
    CHILDREN_ERROR,
    UPDATE_CHILD,
    UPDATE_CHILD_CHECKBOX,
    UNCHECK_ALL_CHILDREN
} from '../types'
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
        const res = await axios.post(`http://localhost:3001/children`,{
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

export const updateChild = (child) => async dispatch => {
    try{
        const res = await axios.put(`http://localhost:3001/children/${child.id}`,{
            firstName:child.firstName,
            lastName:child.lastName,
            phone:child.phone,
            school:child.school,
            stop:child.stop,
            back:child.back
        })
        dispatch({
            type: UPDATE_CHILD_CHECKBOX,
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
        children.map(c => c.back=false)
        console.log(children)
        const res = await axios.get(`http://localhost:3001/children/uncheck`)
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