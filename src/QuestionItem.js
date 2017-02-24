import React, {PropTypes} from 'react';

import {
    connect,
} from 'react-redux';

import {
    createChangeAnswer,
} from './store/results';

const styles = {
    root: (error) => ({
        borderRadius: 2,
        borderLeft: error ? '2px solid red' : '2px solid transparent',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 12,
        overflow: 'hidden',
        width: '100%',
    }),
    questionWrapper: {
        backgroundColor: '#4A4A4A',
        padding: '4px 16px 4px 8px',
    },
    question: {
        color: 'white',
        fontSize: '0.8em',
    },
    optionsWrapper: {
        backgroundColor: '#F5F5F5',
        padding: '16px 0 16px 16px',
    },
    options: {
        width: 160,
    },
};

const QuestionItem = ({
    answer, error, question, index, options, onChangeAnswer,
}) => (
        <div style={styles.root(error)}>
            <div style={styles.questionWrapper}>
                <span style={styles.question}>{
                    `${index + 1}. ${question}`
                }</span>
            </div>
            <div style={styles.optionsWrapper}>
                <select
                    style={styles.options}
                    value={answer ? answer : ''}
                    selected="1"
                    onChange={(e) => {
                        onChangeAnswer(index, e.target.value);
                    }}>
                    <option hidden></option>
                    {
                        options.map((option, i) => (
                            <option key={i}>{option}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );

QuestionItem.propTypes = {
    answer: PropTypes.string,
    error: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChangeAnswer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    onChangeAnswer: (question, answer) => {
        dispatch(createChangeAnswer(`q_${question}`, answer));
    },
});

export default connect(
    null,
    mapDispatchToProps
)(QuestionItem);
