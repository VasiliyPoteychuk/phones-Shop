import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productsApi from '../api/products'

const initialState = {
    items: [],
    meta: {},
    loading: 'idle',
}

export const fetchAll = createAsyncThunk(
    'product/fetchAll',
    async (payload) => {
        const response = await productsApi.getProducts(payload)
        return response.data
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAll.fulfilled, (state, action) => {
            state.items= action.payload.data;
            state.meta = action.payload.meta;
        })
    },
})

export const productSelect = (state) => state.product.items;
export const metaSelect = (state) => state.product.meta;
export default productSlice.reducer