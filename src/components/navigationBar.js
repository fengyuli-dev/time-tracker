import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import WorkIcon from '@material-ui/icons/Work';
import AssessmentIcon from '@material-ui/icons/Assessment';
import "./navigationBar.css"
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (

    <BottomNavigation className="navigation-bar"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/"><BottomNavigationAction label="Timer" icon={<RestoreIcon />} /></Link>
      <Link to="/activities"><BottomNavigationAction label="Activities" icon={<WorkIcon />} /></Link>
      <Link to="/report"><BottomNavigationAction label="Report" icon={<AssessmentIcon />} /></Link>
    </BottomNavigation>

  );
}