import {createSlice} from '@reduxjs/toolkit';

export const topicSlice = createSlice({
    name: 'topics',
    intitialState: {
        topics: {}, 
    },
    reducers: {
       addTopic: (state, action) => {
            return {
                ...state,
                [action.payload.id]: {  
                    id: action.payload.id,
                    name: action.payload.name,
                    icon: action.payload.icon,
                    quizzIds: []
                }
            };
        }
    }
});

export const selectTopics = (state) => state.topics;
export const {addTopic} = topicSlice.actions;
export default topicSlice.reducer;