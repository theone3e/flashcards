import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice ({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon,
                quizIds: [],
            };
        },
        addQuizForTopicId: (state, action) => {
            const{ topicId, quizId } = action.payload;
            state.topics[topicId].quizId.push(quizId);
        }
    }
});

export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;