import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RightPreview from './rightPreview/RightPreview'
import Write from './write/Write'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: '-2%',
    },
  }));

export default function WritePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Write />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RightPreview />
        </Grid>
      </Grid >
    </div >
  );
}