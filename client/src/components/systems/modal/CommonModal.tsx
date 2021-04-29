import React from 'react';
import { useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface modalState {
  modal: {
    visible: boolean;
    theme: string;
    msg: string;
  }

}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CommonModal() {
  const classes = useStyles();

  const {
    visible,
    theme,
    msg
  } = useSelector(
    ({ openModal }: {
      openModal: modalState
    }) => ({
      visible: openModal.modal.visible,
      theme: openModal.modal.theme,
      msg: openModal.modal.msg,
    }),
  );
  console.log('CommonModal 컴포넌트 들어옴', visible, theme, msg)

  return (
    <div className={classes.root}>
      {visible === true && theme === "success" &&
        <Snackbar open={visible} autoHideDuration={6000}>
          <Alert severity="success">{msg}</Alert>
        </Snackbar>
      }
      {visible === true && theme === "error" &&
        <Snackbar open={visible} autoHideDuration={6000}>
          <Alert severity="error">{msg} </Alert>
        </Snackbar>
      }
    </div>
  );
}