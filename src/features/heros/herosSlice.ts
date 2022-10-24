import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../config/store';
import { fetchHeros } from './herosAPI';

export interface HerosState {
	data: any;
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: HerosState = {
	data: {},
	status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const herosFetchAll = createAsyncThunk(
	'heros/fetchAll',
	async () => {
		const response = await fetchHeros();
		// The value we return becomes the `fulfilled` action payload
		return response.data.data;
	}
);

export const herosSlice = createSlice({
	name: 'heros',
	initialState,
	reducers: {
		// fill in primary logic here
	},
	extraReducers: (builder) => {
		builder
			.addCase(herosFetchAll.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(herosFetchAll.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(herosFetchAll.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const {  } = herosSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectHeros = (state: RootState) => state.heros.data;


export default herosSlice.reducer;
