const initialState = {
    user:'aswin'
};

function rootReducer(state = initialState, action) {
    if(action.type == "update_user") {
        
        return {
            user:action.payload
        }
    }
    
    return state;
};

export default rootReducer;
