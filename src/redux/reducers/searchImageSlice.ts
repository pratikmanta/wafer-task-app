import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    searchedImages: [],
    error: false,
    loading: true
}

// search movie list slice reducers and respective state
export const searchImageSlice = createSlice({
    name: 'searchedImages',
    initialState,
    reducers: {
        getSearchedImage: (state):any => {
            return {
                ...state,
            }
        },
        getSearchedImageSuccess: (state, action) => {
            return {
             ...state,
             searchedImages: action.payload,
             loading: false   
            }
        }
    }
})

export const { getSearchedImage, getSearchedImageSuccess } = searchImageSlice.actions;

export const searchedList = (state:any) => state.searchedList

export default searchImageSlice.reducer 