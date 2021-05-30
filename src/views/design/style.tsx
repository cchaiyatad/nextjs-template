import { Box, Typography } from "@material-ui/core";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Grid from "@material-ui/core/Grid";

export const StylePage = () => {
  return (
    <>
      <Head>
        <title>Design</title>
      </Head>
      <CssBaseline />
      <main>
        <Box display="flex" flexDirection="row">
          <Box p={4}>
            <>
              <Typography variant="h1" color="textPrimary">
                h1:Normal <br /> <b>h1:Bold</b>
              </Typography>
              <Typography variant="h2" color="textPrimary">
                h2:Normal <br /> <b>h2:Bold</b>
              </Typography>
              <Typography variant="h3" color="textPrimary">
                h3:Normal <br /> <b>h3:Bold</b>
              </Typography>
              <Typography variant="h4" color="textPrimary">
                h4:Normal <br /> <b>h4:Bold</b>
              </Typography>
              <Typography variant="h5" color="textPrimary">
                h5:Normal <br /> <b>h5:Bold</b>
              </Typography>
              <Typography variant="h6" color="textPrimary">
                h6:Normal <br /> <b>h6:Bold</b>
              </Typography>
              <Typography variant="body1" color="textPrimary">
                body1:Normal <b>body1:Bold</b>
              </Typography>
              <Typography variant="body2" color="textPrimary">
                body2:Normal <b>body2:Bold</b>
              </Typography>
              <Typography variant="button" color="textPrimary" display="block">
                button text
              </Typography>
              <Typography variant="caption" color="textPrimary" display="block">
                caption text
              </Typography>
              <Typography
                variant="overline"
                color="textPrimary"
                display="block"
              >
                overline text
              </Typography>
            </>
          </Box>
          <Box p={4}>
            <Typography component="div" variant="h6">
              <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                  <Box
                    bgcolor="primary.main"
                    color="primary.contrastText"
                    p={2}
                  >
                    primary.main
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    bgcolor="secondary.main"
                    color="secondary.contrastText"
                    p={2}
                  >
                    secondary.main
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box bgcolor="error.main" color="error.contrastText" p={2}>
                    error.main
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    bgcolor="warning.main"
                    color="warning.contrastText"
                    p={2}
                  >
                    warning.main
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box bgcolor="info.main" color="info.contrastText" p={2}>
                    info.main
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    bgcolor="success.main"
                    color="success.contrastText"
                    p={2}
                  >
                    success.main
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box bgcolor="text.primary" color="background.paper" p={2}>
                    text.primary
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box bgcolor="text.secondary" color="background.paper" p={2}>
                    text.secondary
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box bgcolor="text.disabled" color="background.paper" p={2}>
                    text.disabled
                  </Box>
                </Grid>
              </Grid>
              <Typography component="div" variant="h4">
                <Box color="primary.main">primary.main</Box>
                <Box color="secondary.main">secondary.main</Box>
                <Box color="error.main">error.main</Box>
                <Box color="warning.main">warning.main</Box>
                <Box color="info.main">info.main</Box>
                <Box color="success.main">success.main</Box>
                <Box color="text.primary">text.primary</Box>
                <Box color="text.secondary">text.secondary</Box>
                <Box color="text.disabled">text.disabled</Box>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </main>
    </>
  );
};
