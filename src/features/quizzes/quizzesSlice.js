import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = ({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            //const {id, name, topicId, cardIds} = action.payload;
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
            // state.quizzes[id] = {
            //     id: id,
            //     name: name,
            //     topicId: topicId,
            //     cardIds: [],
            // }
        }
    }
});

export const addQuizForTopicId = (quiz) => {
    const {topicId, id} = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizForTopicId({ topicId: topicId, quizId: id}));
    };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
