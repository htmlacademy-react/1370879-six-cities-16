import { createSlice } from "@reduxjs/toolkit";

export interface RentalState {
    currentCity: string,
    offers: [],
    sortOption: string
}

const initialState: RentalState = {
    currentCity: 'Paris',
    offers: [],
    sortOption: 'Popular'
};

export const rentalSlice = createSlice({
    name: 'rental',
    initialState,
    reducers: {
        setCurrentCity: (_state, _action) => { },
        setOffers: (_state) => { },
        setSortOption: (_state, _action) => { }
    }
});

export const { setCurrentCity, setOffers, setSortOption } = rentalSlice.actions;
export default rentalSlice.reducer;