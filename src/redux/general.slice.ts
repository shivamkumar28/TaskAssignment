import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GeneralState {
    charaterList: Array<any>
    charaterDetail: Object
}

const initialState: GeneralState = {
    charaterList: [],
    charaterDetail: {}
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        updateCharaterList: (state, action: PayloadAction<Array<any>>) => {
            state.charaterList = action.payload
        },
        updateCharaterDetails: (state, action: PayloadAction<Object>) => {
            state.charaterDetail = action.payload
        },
    },
})

export const { updateCharaterList, updateCharaterDetails } = generalSlice.actions

export default generalSlice.reducer