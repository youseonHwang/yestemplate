import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '95%',
      padding: theme.spacing(2),
      textAlign: 'center',
      // color: theme.palette.text.secondary,
    },
  }));

export default function Write() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>

    </Paper>
  )
}
