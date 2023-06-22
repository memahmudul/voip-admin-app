import { createSlice } from "@reduxjs/toolkit";
const initialState = {userList: []}




const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
       
        setUserList(state,action){
           state.userList= action.payload;

        },
       removeFromUserList(state,action){
        state.userList = state.userList.filter((item) => item.email !== action.payload);

        }

    }
})

export const {setUserList,removeFromUserList} = userSlice.actions
export default userSlice.reducer