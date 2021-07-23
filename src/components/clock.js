import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./clock.css"

let runner;

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'time': this.getCurrentTime()
        }
    }
    getCurrentTime = () => {
        const date = new Date();
        return date.toLocaleTimeString('it-IT')
    }

    componentDidMount() {
        runner = setInterval(() => {
            this.setState({ time: this.getCurrentTime() });
        }, 1000);
    }
    componentWillUnmount() {
        if (runner) {
            clearInterval(runner);
        }
    }

    render() {
        return (
            <Typography variant="h2" gutterBottom className="clock">
                <span>{this.state.time}</span>
            </Typography>
        );
    }
}
export default Clock;