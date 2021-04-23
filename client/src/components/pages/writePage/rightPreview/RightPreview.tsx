import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: '-2%',
    },
    paper: {
      width: '95%',
      padding: theme.spacing(2),
      textAlign: 'center',
      // color: theme.palette.text.secondary,
    },

    tg: {
      borderCollapse: 'collapse',
      borderSpacing: 0
    },

    tgTgEqfb: {
      padding: '20px 20px',
      wordBreak: 'normal',
      overflow: 'hidden',
      backgroundColor: '#efefef',
      borderColor: 'inherit',
      borderStyle: 'solid',
      borderWidth: '1px',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
      verticalAlign: 'top'
    },
    tgTgL93j: {
      padding: '20px 20px',
      wordBreak: 'normal',
      overflow: 'hidden',
      borderColor: 'inherit',
      borderStyle: 'solid',
      borderWidth: '1px',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
      verticalAlign: 'top'
    },
    tgTgHikc: {
      padding: '20px 20px',
      wordBreak: 'normal',
      overflow: 'hidden',
      backgroundColor: '#cbe5e6',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'inherit',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    tgTg3mbc: {
      padding: '50px 20px',
      wordBreak: 'normal',
      overflow: 'hidden',
      borderColor: 'inherit',
      borderStyle: 'solid',
      borderWidth: '1px',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'right',
      verticalAlign: 'top'
    },

    tgTgFc4c: {
      padding: '20px 20px',
      wordBreak: 'normal',
      overflow: 'hidden',
      backgroundColor: '#cbe5e6',
      borderColor: 'inherit',
      borderStyle: 'solid',
      borderWidth: '1px',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
      verticalAlign: 'top'
    },
    card: {
      width: '100%',
      marginBottom: '1%'
    },

    details: {
      display: 'flex',
      height: '40px',
    },
    cover: {
      width: '20%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
    content: {
      fontSize: '12px',
      textAlign: 'right',
      color: 'gray',
      width: '80%',
    },
    leftDiv: {
      height: '6px',
      background: '#cbe5e6',
      marginBottom: '20px',
    },
    rightDiv: {
      height: '6px',
      marginBottom: '20px',
    }
  }));

interface RightPreviewProps {
  values: {
    belong: string;
    position: string;
    name: string;
    etc: string;
    fileName: Array<string | null>;
    applyContent: string;
    resName: string;
    resJumin: string;
    relation: string;
    applyAmount: number;
  }
}

const RightPreview: React.FC<RightPreviewProps> = ({ values }) => {
  const classes = useStyles();
  console.log(values);
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} >
          <Card className={classes.card} elevation={0}>
            <div className={classes.details}>
              <CardMedia
                className={classes.cover}
                image='../../../../../../public/Logo.png'
                title="Live from space album cover"
              />
              <CardContent className={classes.content}>
                <p>Worldwide Digital Convergence Solution PROVIDER</p>
              </CardContent>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3} sm={3} md={3} >
          <Divider className={classes.leftDiv} />
        </Grid>
        <Grid item xs={9} sm={9} md={9} >
          <Divider className={classes.rightDiv} />
        </Grid>

        <Grid item xs={12} sm={6} md={6} >
          <p style={{ fontSize: '35px', fontWeight: 'bold', textAlign: 'center' }}>
            <br />
                  경조금 지급신청서
                </p>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <div style={{}} >
            <table className={classes.tg} style={{ tableLayout: "fixed", width: "100%" }}>
              <thead>
                <tr>
                  <th rowSpan={2} className={classes.tgTgHikc} >결재</th>
                  <th className={classes.tgTgHikc} >담당</th>
                  <th className={classes.tgTgHikc} >팀장</th>
                  <th className={classes.tgTgHikc} >임원</th>
                  <th className={classes.tgTgHikc} >대표이사</th>
                </tr>
                <tr>
                  <td className={classes.tgTgL93j} ></td>
                  <td className={classes.tgTgL93j}></td>
                  <td className={classes.tgTgL93j}></td>
                  <td className={classes.tgTgL93j}></td>
                </tr>
              </thead>
            </table>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} >
        <div style={{}}>
          <table>
            <colgroup className={classes.tg} style={{ tableLayout: "fixed", width: "1172px" }}>
              <col style={{ width: "190px" }} />
              <col style={{ width: "244px" }} />
              <col style={{ width: "244px" }} />
              <col style={{ width: "267px" }} />
              <col style={{ width: "471px" }} />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={4} className={classes.tgTgEqfb}>
                  경조금 지급규정에 의거하여 다음과 같이 경조금을 신청하오니 지급하여 주시기 바랍니다.<br /><br />- 다 음 -
                      </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2} className={classes.tgTgFc4c}>
                  <br />
                    신청인
                  </td>
                <td className={classes.tgTgFc4c}>소속</td>
                <td className={classes.tgTgFc4c}>직위</td>
                <td className={classes.tgTgFc4c}>성명</td>
              </tr>
              <tr>
                <td className={classes.tgTgL93j}>
                  {values.belong}
                </td>
                <td className={classes.tgTgL93j}>
                  {values.position}
                </td>
                <td className={classes.tgTgL93j}>
                  {values.name}
                </td>
              </tr>
              <tr>
                <td rowSpan={5} className={classes.tgTgHikc}>신청사항</td>
                <td className={classes.tgTgFc4c}>내용</td>
                <td colSpan={2} className={classes.tgTgL93j}>
                  {values.applyContent}
                </td>
              </tr>
              <tr>
                <td rowSpan={3} className={classes.tgTgHikc}>피신청인<br /></td >
                <td className={classes.tgTgEqfb}>성명</td>
                <td className={classes.tgTgL93j}>
                  {values.resName}
                </td>
              </tr>
              <tr>
                <td className={classes.tgTgEqfb}>주민등록번호</td>
                <td className={classes.tgTgL93j}>
                  {values.resJumin}
                </td>
              </tr>
              <tr>
                <td className={classes.tgTgEqfb}>신청인과의 관계</td>
                <td className={classes.tgTgL93j}>
                  {values.relation}
                </td>
              </tr>
              <tr>
                <td className={classes.tgTgFc4c}>신청금액</td>
                <td colSpan={2} className={classes.tgTgL93j}>
                  {values.applyAmount}
                </td>
              </tr>
              <tr>
                <td className={classes.tgTgFc4c}>증빙자료<br />첨부</td>
                <td colSpan={3} className={classes.tgTgL93j}>
                  {values.fileName}
                </td>
              </tr>
              <tr>
                <td className={classes.tgTgFc4c}>기타 사항</td>
                <td colSpan={3} className={classes.tgTgL93j}>
                  {values.etc}
                </td>
              </tr>
              <tr>
                <td colSpan={4} className={classes.tgTg3mbc}>신청자:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(인)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Grid>
    </Paper>
  );
}

export default RightPreview;