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

    const api = process.env.REACT_APP_REACT_APP_API_URL? process.env.REACT_APP_REACT_APP_API_URL : process.env.REACT_APP_API_URL;
export const getChildren = () => async dispatch => {
    console.log('here')
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
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/children/${child.id}`)
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
    console.log(child)
    try{
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/children/${child.id}`,{
            firstName:child.firstName,
            lastName:child.lastName,
            phone:child.phone,
            school:child.school,
            stop:child.stop,
            back:child.back,
            present:child.present
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
        children.map(c => {
            c.back=false
            c.present=false
        })
        console.log(children)
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/children/uncheck`)
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