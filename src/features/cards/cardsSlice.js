import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const {cardId, front, back} = action.payload;
            state.cards[cardId] = {
                cardId,
                front,
                back
            };
        }
    }
});

export const selectCard = (cardId) => (state) => state.cards.cards[cardId];
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;