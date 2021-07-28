import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimerDisplay from './timerDisplay';
import IconButton from '@material-ui/core/IconButton';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ActivitySelector from './activitySelector';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function iconStyle(status) {
    return status ? <StopIcon /> : <PlayArrowIcon />;
}

export default function Timer() {
    const classes = useStyles();
    const [status, setStatus] = useState(false);
    const [timer, setTimer] = useState(0);
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    let date, startTime, endTime, duration;

    function handleClick() {
        const currentdate = new Date();
        if (status) {
            setStatus(false);

            // Get infos about time and duration
            date = currentdate.getMonth() + "/"
                + (currentdate.getDate() + 1) + "/"
                + currentdate.getFullYear()
            endTime = currentdate.getHours() + ":"
                + currentdate.getMinutes();
            startTime = new Date(currentdate);
            duration = Math.floor(timer / 60);
            startTime.setMinutes(currentdate.getMinutes() - duration);
            startTime = startTime.getHours() + ":"
                + startTime.getMinutes();

            console.log(description, tag, date, startTime, endTime, duration);

            submitToDatabase();

            resetAll();
        }
        else {
            setStatus(true);
        }
    }

    useEffect(() => {
        let interval = null;
        if (status) {
            interval = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);
        } else {
            clearInterval(interval);
            setTimer(0);
        }
        return () => clearInterval(interval);
    }, [status, timer]);

    function resetAll() {
        date = "";
        startTime = "";
        endTime = "";
        duration = 0;
        setDescription("");
        setTag("");
    }

    function submitToDatabase() {

    }

    return (
        <div className={classes.root}>
            <ActivitySelector description={description} tag={tag} setDescription={setDescription} setTag={setTag} />
            <IconButton aria-label="start" onClick={handleClick}>
                {iconStyle(status)}
            </IconButton>
            <TimerDisplay status={status} timer={timer} />
        </div>
    );
}