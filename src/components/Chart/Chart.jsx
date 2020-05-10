import React, { useState, useEffect } from "react";
import { getDailyData } from "../../Api";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";
const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    let getChartData = async () => {
      let data = await getDailyData();

      setDailyData([...data]);
    };
    getChartData();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : (
    "helo"
  );

  return <div className={styles.container}>{lineChart}</div>;
};
export default Chart;
