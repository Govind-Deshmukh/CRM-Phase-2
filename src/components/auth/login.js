import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

import appwriteConfig from "./services/appwriteConfig";
import swal from "sweetalert";
import { PlaylistAddCheckCircleRounded } from "@mui/icons-material";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <NavLink color="inherit" to="/">
        MAKEaNOTE
      </NavLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("email") === "" || data.get("password") === "") {
      swal("Oops!", "Please enter valid email and password!", "error");
      return;
    }
    console.log(data.get("email"), data.get("password"));
    const promise = appwriteConfig.createEmailSession(
      data.get("email"),
      data.get("password")
    );

    promise.then(
      function(response) {
        console.log(response); // Success
        console.log(response.status);
        console.log("login success");
      },
      function(error) {
        console.log(error); // Failure
      }
    );
    // try {
    //   const promise = appwriteConfig.createEmailSession(
    //     data.get("email"),
    //     data.get("password")
    //   );
    //   // console.log(promise);

    //   promise.then(
    //     function(response) {
    //       if (response.status === 201) {
    //         swal("Success!", "You have successfully logged in", "success");
    //         // localStorage.setItem("session", response);
    //         window.location.href = "/dashboard";
    //         console.log(response); // Success
    //       } else {
    //         swal("Oops!", "Please enter valid email and password", "error");
    //       }
    //     },
    //     function(error) {
    //       console.log(error); // Failure
    //     }
    //   );
    //   // const res = appwriteConfig.createEmailSession(data.get('email'), data.get('password'));
    //   // if(res.status === 201){
    //   //   swal("Success!",'You have successfully logged in', "success");
    //   //   localStorage.setItem('session',res);
    //   //   window.location.href = '/dashboard';
    //   // }else{
    //   //   swal("Oops!",'Please enter valid email and password', "error");
    //   // }
    // } catch (err) {
    //   console.log(err);
    //   swal("Oops!", "Please enter valid email and password", "error");
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main", fontSize: 30 }}>
            <span role="img" aria-label="logo" aria-labelledby="logo">
              👀
            </span>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/forgot" variant="body2">
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
