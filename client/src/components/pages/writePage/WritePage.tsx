import React from 'react';
import { withRouter } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RightPreviewContainer from '../../../containers/pages/writePage/rightPreview/RightPreviewContainer';
import Write from './write/Write'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: '-2%',
    },
  }));

function WritePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Write />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RightPreviewContainer />
        </Grid>
      </Grid >
    </div >
  );
}

export default withRouter(WritePage);
