import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicSliceReducer from '../features/topics/topicSlice';

export default configureStore({
  reducer: {
    topics: topicSliceReducer
  }
});
