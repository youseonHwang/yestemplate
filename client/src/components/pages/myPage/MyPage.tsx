import * as React from "react";
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { ITemplate } from '../../../api/mypage';

{/* 자식 컴포넌트 */ }
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
interface Props extends RouteComponentProps {
  key?: number,
  templates: Array<ITemplate>
}

function MyPageComponent(Props: Props) {
  const classes = useStyles();
  console.log(Props.templates)
  const templates = Props.templates

  return (
    <>
      <div className={classes.root} >
        <Grid container justify="space-evenly" >
          <Grid container item xs={12} sm={12} md={12} spacing={5}>

            <TemplateAddCard />

            {templates.map((template: ITemplate, index: number) => {
              return (
                <TemplateCard key={index} template={template} />
              )
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default withRouter(MyPageComponent);
