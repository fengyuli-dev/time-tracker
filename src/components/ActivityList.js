import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import "./ActivityList.css";

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
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    var TagList = ["Cooking", "Working", "Playing", "NETFLIX"]

    return (
        <div className={classes.root}>

            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" class="TLTitle">
                        Activity List
                    </Typography>
                    <div class="TaskListDiv">
                        <List dense={dense}>

                            {TagList.map((value, index) => { //currently references TagList, created inside the function
                                return (
                                    <ListItem>
                                        <ListItemText
                                            primary={value}
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" onClick={() => { alert('Delete Activity') }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )
                            })}

                        </List>
                    </div>

                    <IconButton class="AddButton" aria-label="add" onClick={() => { alert('Add Activity') }}>
                        <AddIcon />
                    </IconButton>

                </Grid>
            </Grid>
        </div>
    );
}
