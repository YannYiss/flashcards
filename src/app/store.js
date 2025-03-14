import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicSliceReducer from '../features/topics/topicSlice';
import quizzesSliceReducer from '../features/quizzes/quizzesSlice';

export default configureStore({
  reducer: {
    topics: topicSliceReducer,
    quizzes: quizzesSliceReducer
  }
});
