import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            ㅇㄹ
        </Typography>
          <Typography variant="h5" component="h2">
            템플릿 제목적기
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            2021/04/20
        </Typography>
          <Typography variant="body2" component="p">
            설명을 적을게 있나..
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">수정하러 가기</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}