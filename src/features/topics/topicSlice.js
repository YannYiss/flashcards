import {createSlice} from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';

export const topicSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
       addTopic: (state, action) => {
            const {topicId, name, icon} = action.payload;
            state.topics[topicId] = {  
                topicId,
                name,
                icon,
                quizIds: []
            }
        },
    },
    extraReducers: {
        [addQuiz]: (state, action) => {
            const {topicId, quizId} = action.payload; 
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const {addTopic} = topicSlice.actions;
export default topicSlice.reducer;