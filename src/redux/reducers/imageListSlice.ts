import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    imageList: [],
}

// photo list slice reducers and respective state
export const imageListSlice = createSlice({
    name: 'imageList',
    initialState,
    reducers: {
        getImageList: (state) => {
            return state
        },
        getImageListSuccess: (state, action) => {
            return {
             ...state,
             imageList: action.payload,   
            }
        }

    }
})

export const { getImageList, getImageListSuccess } = imageListSlice.actions;

export const imageListData = (state:any) => state.imageList

export default imageListSlice.reducer 
