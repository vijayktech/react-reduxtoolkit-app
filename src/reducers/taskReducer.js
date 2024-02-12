// Intialise State object with taskObj empty
const initialState = {
    tasksObj: []
}
    
const taskReducer = (state = initialState, action) => {
        switch (action.type){
            case 'ADD_TASK':
                return {
                    ...state,
                    tasksObj: [...state.tasksObj, action.payload] 
                };    
            case 'DELETE_TASK':
                return {
                    ...state,
                    tasksObj: state.tasksObj.filter((task) => task.id !== action.payload )
                };    
                            
            default:
                return state;    
        }
    }

    export default taskReducer;