import React, { useEffect } from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
const Cards = ({ data }) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              {data?.confirmed ? (
                <CountUp
                  start={0}
                  end={Number(data.confirmed)}
                  duration={2}
                  separator=","
                />
              ) : (
                "loading"
              )}
            </Typography>
            {/* <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography> */}
            <Typography variant="body2">number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recorved
            </Typography>
            <Typography variant="h5">
              {data?.recovered ? (
                <CountUp
                  start={0}
                  end={Number(data.recovered)}
                  duration={2}
                  separator=","
                />
              ) : (
                "loading"
              )}
            </Typography>
            {/* <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography> */}

            <Typography variant="body2">number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Death
            </Typography>
            <Typography variant="h5">
              {data?.deaths ? (
                <CountUp
                  start={0}
                  end={Number(data.deaths)}
                  duration={2}
                  separator=","
                />
              ) : (
                "loading"
              )}
            </Typography>
            <Typography color="textSecondary">
              {new Date(data?.lastupdatedtime).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
