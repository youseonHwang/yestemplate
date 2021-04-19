import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import LeftLogo from './leftLogo/LeftLogo';
import MidNavBar from './midNavBar/MidNavBar'
import RightNavBar from './rightNavBar/RightNavBar'

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
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
          <LeftLogo />
          <MidNavBar />
          <RightNavBar />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;