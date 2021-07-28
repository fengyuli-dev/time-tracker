import React from 'react';
import { Typography } from '@material-ui/core';
import "./timerDisplay.css"

export default function TimerDisplay(props) {

    function formatTime(timer) {
        let seconds = 0, minutes = 0, hours = 0;
        if (0 < timer && timer < 60) {
            seconds = timer;
        }
        else if (60 < timer && timer < 3599) {
            minutes = Math.floor(timer / 60);
            seconds = timer % 60;
        }
        else {
            hours = Math.floor(timer / 3600);
            timer %= 3600;
            minutes = Math.floor(timer / 60);
            seconds = timer % 60;
        }
        return convertToString(hours) + ":" + convertToString(minutes) + ":" + convertToString(seconds)
    }

    function convertToString(num) {
        if (num < 10) {
            return "0" + num.toString();
        }
        else {
            return num.toString();
        }
    }

    return (
        <Typography variant="h2" gutterBottom className="clock">
            <span>{formatTime(props.timer)}</span>
        </Typography>
    )
}