import React from "react";
import styles from "./Chart.module.css";
import { Pie, Line, Bar } from "react-chartjs-2";

const Chart = (props) => {

  const colorPicker = ["#FAF8F0", "#A7E9E1", "#FBC7C3", "#F7F4E7", "#B6DF82"]

  const Charts = props ? (
    <>
      <Line
        data={{
          labels: props.chartLabels.map((activity) => activity),
          datasets: [
            {
              data: props.chartData.map((timeSpent) => timeSpent),
              label: "Activity",
              borderColor: "#3333ff",
              fill: true,
              backgroundColor: "#CAA6DB",
            },

          ],
        }}
      />
      {/* <Bar
        data={{
          labels: props.chartLabels.map((activity) => activity),
          datasets: [
            {
              data: props.chartData.map((timeSpent) => timeSpent),
              label: "Activity",
              borderColor: "#3333ff",
              fill: true,
              backgroundColor: colorPicker.map(() => colorPicker[Math.round(Math.random() * 2)])
              ,
            },

          ],
        }}
      /> */}
      {/* <Pie
        data={{
          labels: props.chartLabels.map((activity) => activity),
          datasets: [
            {
              data: props.chartData.map((timeSpent) => timeSpent),
              label: "Activity",
              borderColor: "#3333ff",
              fill: true,
              backgroundColor: colorPicker.map(() => colorPicker[Math.round(Math.random() * 2)])
              ,
            },

          ],
        }}
      />  */}
    </>
  ) : null;

  return <div className={styles.container}>{Charts}</div>;
};
export default Chart;
