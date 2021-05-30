import Head from "next/head";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
}));

export const TemplatePage = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Template</title>
      </Head>
      <div className={classes.root}>
        <CssBaseline />
        <main>
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
          >
            Hello, World!
          </Typography>
        </main>
      </div>
    </>
  );
};
