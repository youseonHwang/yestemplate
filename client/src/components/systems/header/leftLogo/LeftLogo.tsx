import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  img: {
    width: '90%'
  },
  link: {
    width: '3%'
  }
}));

const LeftLogo: React.FC = () => {
  const classes = useStyles();
  return (
    <Link to="/" className={classes.link}>
      <img src='../../../../public/YESTEMPLATE_LOGO_ver2.png' alt="header_logo" className={classes.img} />
    </Link>
  );
};

export default LeftLogo;