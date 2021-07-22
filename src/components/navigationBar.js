import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import WorkIcon from '@material-ui/icons/Work';
import AssessmentIcon from '@material-ui/icons/Assessment';
import "./navigationBar.css"

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
      <BottomNavigationAction label="Timer" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Activities" icon={<WorkIcon />} />
      <BottomNavigationAction label="Report" icon={<AssessmentIcon />} />
    </BottomNavigation>
  );
}