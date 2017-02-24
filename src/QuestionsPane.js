import React, {
    PropTypes,
} from 'react';

import {
    connect,
} from 'react-redux';

import {
    createAnswerErrorChange,
    createChangeResult,
    createClearFields,
} from './store/results';

const styles = {
    buttons: {
        display: 'flex',
    },
    button: {
        flex: 1,
    },
};

import QuestionItem from './QuestionItem';

const QuestionsPane = ({questions, onClear, onSubmit}) => (
    <div className="questions-pane">
        {
            Object.keys(questions).map((key, i) => (
                <QuestionItem
                    answer={questions[key].answer}
                    error={questions[key].error}
                    key={i}
                    question={questions[key].question}
                    index={i}
                    options={questions[key].options} />
            ))
        }
        <div style={styles.buttons}>
            <button
                style={{...styles.button, marginRight: 4}}
                onClick={() => {
                    onSubmit(questions);
                }}>
                Submit
            </button>
            <button
                style={{...styles.button, marginLeft: 4}}
                onClick={onClear}>
                Clear Values
            </button>
        </div>
    </div >
);

QuestionsPane.propTypes = {
    questions: PropTypes.object.isRequired,
    onClear: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = ({results: {questions}}) => ({
    questions,
});

const mapDispatchToProps = (dispatch) => ({
    onClear: () => {
        dispatch(createClearFields());
    },
    onSubmit: (questions) => {
        let total = 0;
        let correct = 0;
        let incorrect = 0;

        const keys = Object.keys(questions);
        keys.forEach((key) => {
            const {answer} = questions[key];
            if (answer) {
                ++total;
                if (answer === questions[key].correctAnswer)
                    ++correct;
                else
                    ++incorrect;
            }
            dispatch(createAnswerErrorChange(
                key,
                !answer || answer !== questions[key].correctAnswer
            ));
        });

        if (total === keys.length) {
            dispatch(createChangeResult(correct, incorrect));
        }
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionsPane);
