import React from 'react';
import { withRouter } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Write from './write/Write'
{/* import child components */}
import RightPreviewContainer from '../../../containers/pages/writePage/rightPreview/RightPreviewContainer';
import PreviewContainer from '../../../containers/pages/writePage/preview/PreviewContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: '-2%',
    },
  }));

  interface WritePageProps {
    values: {
      belong: string;
      position: string;
      name: string;
      etc: string;
      fileName: Array<string | null>;
      applyContent: string;
      resName: string;
      resJumin: string;
      relation: string;
      applyAmount: number;
    };
    onPreviewModal: () => void; 
    preview: boolean; 
}
  

const WritePage: React.FC<WritePageProps> = ({ 
  values,
  preview,
  onPreviewModal, 
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={6}>
          <Write />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <RightPreviewContainer />
        </Grid>
      </Grid >
    </div >
  );
}

export default WritePage;