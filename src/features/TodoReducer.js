export const TodoReducer=(state,action)=>{
    switch(action.color){
        case 'red':{
            return {color:'red'}
        }
        case 'blue':{
            return{color:'blue'}
        }
        default:{
            return{color:'green'}
        }
    }
}