import React from 'react';

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

const QuestionsPane = () => (
    <div className="questions-pane" style={styles.root}>
        {
            Data.map(({question, options}, i) => (
                <QuestionItem
                    key={i}
                    question={question}
                    index={i}
                    options={options} />
            ))
        }
        <div style={styles.buttons}>
            <button
                style={{...styles.button, marginRight: 4}}>
                Submit
            </button>
            <button
                style={{...styles.button, marginLeft: 4}}>
                Clear Values
            </button>
        </div>
    </div >
);

QuestionsPane.propTypes = {
};

export default QuestionsPane;
