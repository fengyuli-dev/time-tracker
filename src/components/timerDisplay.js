import React from 'react';
import { Typography } from '@material-ui/core';
import "./timerDisplay.css"

export default function TimerDisplay(props) {
    return (
        <Typography variant="h2" gutterBottom className="clock">
            <span>0</span>
        </Typography>
    )
}