import {GET_SCHOOLS, ADD_SCHOOL, DELETE_SCHOOL, UPDATE_SCHOOL} from '../types'

const initialState = {
    schools:[],
    loading:true
}

export default function(state = initialState, action){

    const copySchools = [...state.schools];
    let index;

    switch(action.type){

        case GET_SCHOOLS:
            return {
                ...state,
                schools:action.payload,
                loading:false
            }

        case ADD_SCHOOL:
            return {
                ...state,
                schools:[...state.schools,action.payload],
                loading:false
            }

        case DELETE_SCHOOL:
            index = copySchools.findIndex(s => {
                return s.id === action.payload
            })

            copySchools.splice(index,1)

            return{
                schools:copySchools,
                loading:false
            }

        case UPDATE_SCHOOL:

            index = copySchools.findIndex(s => {
                return s.id === action.payload.id
            })

            copySchools[index]=action.payload

            return{
                schools:copySchools,
                loading:false
            }
        default: return state
    }

}