/* eslint-env commonjs */
/* eslint-disable require-jsdoc */

import React, {
    Component,
    PropTypes,
} from 'react';

const BarChart = require('react-chartjs').Bar;

const styles = {
    root: {
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 4,
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
    },
    chart: {
        height: '100%',
        width: '100%',
    },
};

const getData = (correct, incorrect) => ({
    labels: ['Correct', 'Incorrect'],
    datasets: [{
        label: 'SCORE',
        data: [correct, incorrect],
        backgroundColor: [
            '#000',
            '#000',
        ],
        borderColor: [
            '#000',
            '#f00',
        ],
        borderWidth: 10,
    }],
});

const options = {
    scales: {
        yAxes: [{
            ticks: {
                stepSize: 0.5,
            },
        }],
    },
};

class ResultsPane extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="results-pane" style={styles.root}>
                <BarChart
                    data={getData(this.props.correct, this.props.incorrect)}
                    options={options} />
            </div>
        );
    }
}

ResultsPane.propTypes = {
    correct: PropTypes.number.isRequired,
    incorrect: PropTypes.number.isRequired,
};

export default ResultsPane;
