import React from 'react';

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
        marginBottom: 48,
    },
};

const App = () => (
    <div style={styles.root}>
        <span style={styles.title}>Cricket Trivia</span>
        <div className="panes">
            <QuestionsPane />
            <ResultsPane
                correct={3}
                incorrect={1} />
        </div>
    </div>
);

export default App;
