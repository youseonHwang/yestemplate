import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Applicant from './applicant/Applicant';
import ApplyDocument from './applyDocument/ApplyDocument';
import ApplyInfo from './applyInfo/ApplyInfo';


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
      <Applicant />
      <ApplyInfo />
      <ApplyDocument />
    </Paper>
  )
}
