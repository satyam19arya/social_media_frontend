import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

// jaha sai asynchronous call hoo rhi hai hume pta hai waha par loading hume dikhani hai 
// tho hum sidha yahi sai dispatch kar dege loading state ko naa ki har component mai lagaye
export const getMyInfo = createAsyncThunk("user/getMyInfo", async () => {
    try{
        const response = await axiosClient.get('/user/getMyInfo')
        return response.result;
    }catch(e){
        return Promise.reject(e);
     }
});

export const updateMyProfile = createAsyncThunk("user/updateMyProfile", async (body) => {
    try{
        const response = await axiosClient.put('/user/', body) //in body, we pass name, user, img
        return response.result;
    }catch(e){
        return Promise.reject(e);
    }
});

const appConfigSlice = createSlice({
    name: 'appConfigSlice',
    initialState: {
        isLoading: false,
        toastData: {},
        myProfile: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        showToast: (state, action) => {
            state.toastData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getMyInfo.fulfilled, (state, action) => {
            state.myProfile = action.payload.user;
        })
        .addCase(updateMyProfile.fulfilled, (state, action) => {
            state.myProfile = action.payload.user;
        })
    }
})

export default appConfigSlice.reducer;
export const {setLoading, showToast} = appConfigSlice.actions; 