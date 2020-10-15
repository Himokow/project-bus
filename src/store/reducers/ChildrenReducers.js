import {
    GET_CHILDREN,
    ADD_CHILD,
    DELETE_CHILD,
    UPDATE_CHILD,
    UPDATE_CHILD_CHECKBOX,
    UNCHECK_ALL_CHILDREN
} from '../types'

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
                children:action.payload,
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
            
            return{
                children:action.payload,
                loading:false
            }

        case UNCHECK_ALL_CHILDREN:
            return{
                children:action.payload,
                loading:false
            }

        default: return state
    }

}