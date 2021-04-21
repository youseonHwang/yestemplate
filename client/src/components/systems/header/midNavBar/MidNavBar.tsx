import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    fontSize: '1.3em',
    fontWeight: 'bold',
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: theme.spacing(1, 1.5),
  },
}));

export interface midnavProps {
}

const MidNavBar: React.FC<midnavProps> = ({

}) => {
  const classes = useStyles();
  return (
    <>
      <Grid item alignItems="center">
        <nav>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            템플릿 작성하기
        </Link>
          <Link variant="button" color="textPrimary" href="/mypage" className={classes.link}>
            내 템플릿
        </Link>
        </nav>
      </Grid>
    </>
  );
};

export default MidNavBar;