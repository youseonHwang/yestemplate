{/* 로그인 폼 구현 */}
import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    boxShadow: '5px 5px 5px 5px gray',
    color: 'rgb(242, 242, 242)',
    marginLeft: '14%',
    width: '70%',
    marginTop: '8%',
  },
  details: {
    display: 'flex',
    height:'600px',
  },
  //img-cover
  cover: {
    background: 'rgb(40, 141, 83)',
    width: '50%',
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
  },
  content: {
    color: 'black',
    width: '50%',
    background: 'rgb(224, 224, 224)'
  },
}));

interface LoginProps {
  email: string;
  password: string;
  onChangeLoginFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLoginRequest: (
    email: string,
    password: string,
  ) => void;
}
const Login: React.FC<LoginProps> = ({
  email,
  password,
  onChangeLoginFields,
  onLoginRequest,
}) => {

  const classes = useStyles();

  return (
    <>
      <div>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardMedia
              className={classes.cover}
              image="../../../../public/YESTEMPLATE_LOGO_white.png"
              title="Live from space album cover"
            />
            <CardContent className={classes.content}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Login
                </Typography>
                  <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={email}
                          onChange={onChangeLoginFields}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          value={password}
                          onChange={onChangeLoginFields}
                        />
                      </Grid>
                      <Grid item xs={12}>
                          <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                          />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={() => {
                        onLoginRequest(email, password);
                        <Link href="/template"></Link>
                      }}
                    >
                      Login
                    </Button>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <Link href="/signup" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </Container>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Login;
