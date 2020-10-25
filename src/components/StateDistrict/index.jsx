import React, { useState, useEffect } from "react";
import { getDailyData, getStateVise } from "../../Api";
import styles from "./index.module.css";
import { Line, Bar } from "react-chartjs-2";
const StateChart = ({ districtState }) => {

  const lineChart = Object.keys(districtState).length ? (
    <Line
      data={{
        labels: Object.keys(districtState).map((district) => district),
        datasets: [
          {
            data: Object.keys(districtState).map(
              (e) => districtState[e].confirmed
            ),
            label: "Confirmed",
            borderColor: "#3333ff",
            fill: true,
            // backgroundColor: "rgb(239, 107, 132)",
          },
            {
              data: Object.keys(districtState).map(
                (e) => districtState[e].deceased
              ),
              label: "Deaths",
              borderColor: "red",
              fill: true,
            },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};
export default StateChart;
