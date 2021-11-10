import { MODE_DEFAULT, MODE_GREEN, MODE_BLUE, MODE_RED } from "../constants";

const defaultValues ={
    color: null
}

export const colorReducer = (state = defaultValues, action) =>{
    switch(action.type){
        case MODE_DEFAULT:{
            return {
                color: null
            }
        }
        case MODE_RED:{
            return{
                color:  {background: 'red'}
            }
        }
        case MODE_GREEN:{
            return{
                color:  {background: 'green'}
            }
        }
        case MODE_BLUE:{
            return{
                color: {background: 'blue'}
            }
        }
        default: {
            return {
                color: null
            }
        }
    }
}