import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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

    return (
        <div className={classes.root}>
            <IconButton aria-label="start" onClick={handleClick}>
                {iconStyle(status)}
            </IconButton>
        </div>
    );

    function handleClick() {
        if (status === true) {
            setStatus(false);
        }
        else {
            setStatus(true);
        }
    }
}