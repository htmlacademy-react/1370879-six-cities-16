import { createSlice } from "@reduxjs/toolkit";
import { OfferCardType } from "../../types/offer";

export type SortOption = 'Popular' | 'PriceLowToHigh' | 'PriceHighToLow';

export interface RentalState {
    currentCity: string,
    offers: OfferCardType[],
    sortOption: SortOption
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
        setCurrentCity: (state, action) => {
            state.currentCity = action.payload;
        },
        setOffers: (state, action) => {
            state.offers = action.payload;
        },
        setSortOption: (state, action) => {
            state.sortOption = action.payload;
        }
    }
});

export const { setCurrentCity, setOffers, setSortOption } = rentalSlice.actions;
export default rentalSlice.reducer;