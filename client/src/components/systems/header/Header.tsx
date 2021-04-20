import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import LeftLogo from './leftLogo/LeftLogo';
import MidNavBar from './midNavBar/MidNavBar'
import RightNavBar from './rightNavBar/RightNavBar'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#ffffff',
    boxShadow: '3px 3px 3px 3px rgb(215,215,215)',
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: '3%',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ({

}) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <LeftLogo />
            <MidNavBar />
            <RightNavBar />
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;