// Implemented by Raman

import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import "./activityList.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

export default function InteractiveList() {
    const classes = useStyles();
    // What is dense, primary, and secondary?
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    //let tagList = ["Cooking", "Working", "Playing", "NETFLIX"]


    const [activity, setActivity]=useState(["Cooking","Working","Playing"])

    /*const addActivity=(newActivity)=>{
        setActivity([...activity,{newActivity}])
    }*/

    const delActivity=(oldActivity)=>{
        activity.splice(oldActivity,1)
        setActivity([...activity])
    }

    return (
        <div className={classes.root}>
            <Typography variant="h6" class="TLTitle">
                Activity List
            </Typography>
            <div class="TaskListDiv">
                <List dense={dense}>
                    {activity.map((value, index) => { //currently references TagList, created inside the function
                        return (
                            <ListItem>
                                <ListItemText
                                    primary={value}
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={() => { 
                                        delActivity(index)}}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
            <IconButton class="AddButton" aria-label="add" onClick={() => { 
                //addActivity("New Activity")
                alert('Add Activity') }}>
                <AddIcon />
            </IconButton>
        </div>
    );
}
