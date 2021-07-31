// Implemented by Raman and Fengyu

import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import "./activityList.css";

const db = openDatabase('TimeTracker', '1.0', 'main database', 1024 * 1024 * 1024);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
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
    const [activity, setActivity] = useState([]);
    const [newItem, setNewItem] = useState("");
    // Only on first render
    useEffect(refreshList, [])

    function delActivity(e) {
        const deleteItem = e.currentTarget.value;
        db.transaction(function (tx) {
            console.log(deleteItem);
            tx.executeSql('DELETE FROM ACTIVITIES WHERE name = ?', [deleteItem]);
        });
        refreshList()
    }

    function addActivity(e) {
        e.preventDefault();
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO ACTIVITIES VALUES (?)', [newItem]);
        }, function(error) {
            console.log(error)
        });
        setNewItem("");
        refreshList()
    }

    const handleTextChange = (event) => {
        setNewItem(event.target.value);
    };

    function refreshList() {
        setActivity([]);
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM ACTIVITIES', [], function (_, results) {
                const len = results.rows.length;
                for (let i = len - 1; i >= 0; i--) {
                    setActivity(oldActivity => [...oldActivity, results.rows.item(i).name]);
                }
            }, null);
        });
    }

    return (
        <div className={classes.root}>
            <Typography variant="h6" class="TLTitle">
                Activity List
            </Typography>
            <div class="TaskListDiv">
                <List dense={false}>
                    {activity.map((value, index) => {
                        return (
                            <ListItem>
                                <ListItemText
                                    primary={value}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={delActivity} value={value}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={addActivity}>
                <TextField id="standard-basic" label="New Item" value={newItem} onChange={handleTextChange} />
                <IconButton type="submit" class="AddButton" aria-label="add">
                    <AddIcon />
                </IconButton>
            </form>
        </div>
    );
}