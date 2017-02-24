import Data from '../data';

const questions = Data.reduce((acc, question, i) => ({
    ...acc,
    [`q_${i}`]: {
        ...question,
        answer: undefined,
        error: false,
    },
}), {});

const initialState = {
    questions,
    results: undefined,
};

const ANSWER_ERROR_CHANGE = 'ANSWER_ERROR_CHANGE';
export const createAnswerErrorChange = (question, error) => ({
    type: ANSWER_ERROR_CHANGE,
    question,
    error,
});

const CHANGE_RESULT = 'CHANGE_RESULT';
export const createChangeResult = (correct, incorrect) => ({
    type: CHANGE_RESULT,
    correct,
    incorrect,
});

const CHANGE_ANSWER = 'CHANGE_ANSWER';
export const createChangeAnswer = (question, answer) => ({
    type: CHANGE_ANSWER,
    question,
    answer,
});

const CLEAR_FIELDS = 'CLEAR_FIELDS';
export const createClearFields = () => ({
    type: CLEAR_FIELDS,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ANSWER:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    [action.question]: {
                        ...state.questions[action.question],
                        answer: action.answer,
                    },
                },
            };
        case ANSWER_ERROR_CHANGE:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    [action.question]: {
                        ...state.questions[action.question],
                        error: action.error,
                    },
                },
            };
        case CHANGE_RESULT:
            return {
                ...state,
                results: {
                    correct: action.correct,
                    incorrect: action.incorrect,
                },
            };
        case CLEAR_FIELDS:
            return initialState;
        default:
            return state;
    }
};
