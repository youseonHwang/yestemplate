import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '95%',
      padding: theme.spacing(2),
      textAlign: 'center',
      // color: theme.palette.text.secondary,
    },
  }));

export default function Write() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>

    </Paper>
  )
}

{/* input 창 합치기 */ }
// import React from 'react';
// //* IMPORT_CHILD_COMPONENTS
// import Applicant from './applicant/Applicant';
// import ApplyDocument from './applyDocument/ApplyDocument';
// import ApplyInfo from './applyInfo/ApplyInfo';


// const WritePage: React.FC = () => {
//   return (
//     <div>
//       <Applicant />
//       <ApplyInfo />
//       <ApplyDocument />
//     </div>
//   );
// };

// export default WritePage;

