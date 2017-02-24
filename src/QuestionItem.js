import React, { PropTypes } from 'react';

const styles = {
    root: {
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        margin: '12px 0',
        overflow: 'hidden',
        width: '100%',
    },
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

const QuestionItem = ({question, index, options}) => (
    <div style={styles.root}>
        <div style={styles.questionWrapper}>
            <span style={styles.question}>{`${index + 1}. ${question}`}</span>
        </div>
        <div style={styles.optionsWrapper}>
            <select style={styles.options}>{
                options.map((option) => (
                    <option>{option}</option>
                ))
            }</select>
        </div>
    </div>
);

QuestionItem.propTypes = {
    question: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default QuestionItem;
