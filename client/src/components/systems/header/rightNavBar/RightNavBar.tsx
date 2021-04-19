import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

}));

export interface midnavProps {
}

const RightNavBar: React.FC<midnavProps> = ({

}) => {
  const classes = useStyles();
  return (
    <>
        <Avatar className={classes.purple}>OP</Avatar>
    </>
  );
};

export default RightNavBar;