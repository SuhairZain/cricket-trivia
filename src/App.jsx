import React, {
    PropTypes,
} from 'react';

import {
    connect,
} from 'react-redux';

import QuestionsPane from './QuestionsPane';
import ResultsPane from './ResultsPane';

const styles = {
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        fontSize: '2em',
        fontWeight: 100,
        margin: '48px 0px',
    },
};

const App = ({correct, incorrect, resultsReady}) => (
    <div style={styles.root}>
        <span style={styles.title}>Cricket Trivia</span>
        <div className="panes">
            <QuestionsPane />
            {
                resultsReady ?
                    <ResultsPane
                        correct={correct}
                        incorrect={incorrect} /> :
                    null
            }

        </div>
    </div>
);

App.propTypes = {
    correct: PropTypes.number.isRequired,
    incorrect: PropTypes.number.isRequired,
    resultsReady: PropTypes.bool.isRequired,
};

const mapStateToProps = ({results: {results}}) => {
    const resultsReady = results !== undefined;
    return {
        resultsReady: results !== undefined,
        correct: resultsReady ? results.correct : 0,
        incorrect: resultsReady ? results.incorrect : 0,
    };
};

export default connect(
    mapStateToProps
)(App);
