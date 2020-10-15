import {GET_STOPS, ADD_STOP, DELETE_STOP, UPDATE_STOP} from '../types'

const initialState = {
    stops:[],
    loading:true
}

export default function(state = initialState, action){

    const copyStops = [...state.stops];
    let index;

    switch(action.type){

        case GET_STOPS:
            return {
                ...state,
                stops:action.payload,
                loading:false
            }

        case ADD_STOP:
            return {
                ...state,
                stops:[...state.stops,action.payload],
                loading:false
            }

        case DELETE_STOP:
            index = copyStops.findIndex(s => {
                return s.id === action.payload
            })

            copyStops.splice(index,1)

            return{
                stops:copyStops,
                loading:false
            }

        case UPDATE_STOP:

            index = copyStops.findIndex(s => {
                return s.id === action.payload.id
            })

            copyStops[index] = action.payload;

            return{
                stops:copyStops,
                loading:false
            }
        default: return state
    }

}