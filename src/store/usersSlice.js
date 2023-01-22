import { createSlice,  } from '@reduxjs/toolkit'


const initialState = {
    
    users: {},
   
}



export const usersSlice = createSlice({
    name: 'allUsers',
    initialState,
    reducers: {
       saveToken: (state, action)=> { 
        state.users= action.payload
       }
    },
    
});

export const userSelect = (state) => state.user
export default usersSlice.reducer;
export const {saveToken} = usersSlice.actions;