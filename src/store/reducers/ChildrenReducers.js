import {GET_CHILDREN, ADD_CHILD, DELETE_CHILD, UPDATE_CHILD} from '../types'

const initialState = {
    children:[],
    loading:true
}

export default function(state = initialState, action){

    const copyChildren = [...state.children];
    let index;

    switch(action.type){

        case GET_CHILDREN:
            return {
                ...state,
                children:action.payload,
                loading:false
            }

        case ADD_CHILD:
            return {
                ...state,
                children:[...state.children,action.payload],
                loading:false
            }

        case DELETE_CHILD:
            index = copyChildren.findIndex(s => {
                return s.id === action.payload
            })

            copyChildren.splice(index,1)

            return{
                children:copyChildren,
                loading:false
            }

        case UPDATE_CHILD:
            console.log(action.payload)

        default: return state
    }

}