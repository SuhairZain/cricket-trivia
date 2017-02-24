import React, { PropTypes } from 'react';

const styles = {
    root: {
        margin: '0 16px',
    },
    buttons: {
        display: 'flex',
    },
    button: {
        flex: 1,
    },
};

import Data from './data';

import QuestionItem from './QuestionItem';

const QuestionsPane = ({prop}) => (
    <div style={styles.root}>
        {
            Data.map(({question, options}, i) => (
                <QuestionItem
                    question={question}
                    index={i}
                    options={options} />
            ))
        }
        <div style={styles.buttons}>
            <button style={{ ...styles.button, marginRight: 4 }}>SUBMIT</button>
            <button style={{ ...styles.button, marginLeft: 4 }}>RESET</button>
        </div>
    </div >
);

QuestionsPane.propTypes = {
    prop: PropTypes.string.isRequired,
};

export default QuestionsPane;
