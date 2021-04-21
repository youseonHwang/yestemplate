import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ITemplate } from '../../../../api/mypage';

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

interface Props {
  key: number,
  template: ITemplate
}

const MyPageComponent: React.FC<Props> = ({
  key,
  template
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            이름: {template.applicant.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {template.title ? template.title : 'undefined'}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            작성: {template.createdAt}
            <br />
            수정: {template.updatedAt}
          </Typography>
          <Typography variant="body2" component="p">
            {template.applyInfo.applyContent}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">수정하러 가기</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default MyPageComponent;