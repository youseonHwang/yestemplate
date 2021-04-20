import * as React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import TemplateAddCard from './cards/TemplateAddCard'
import TemplateCard from "./cards/TemplateCard"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: '10%',
      marginRight: '10%',
      width: '80%',
      flexGrow: 1,
    },

    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root} >
        <Grid container justify="space-evenly" >
          <Grid container item xs={12} spacing={9}>
            <TemplateAddCard />
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
          </Grid>
        </Grid>
      </div>
    </>

  );
}