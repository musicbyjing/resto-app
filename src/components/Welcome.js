import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: "center"
  }
}));

const flexStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
};

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div style={flexStyle}>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Welcome
        </Typography>
        <Typography component="p">
          Send your location to get a list of the worst restaurants in your
          area.
        </Typography>
      </Paper>
    </div>
  );
}
