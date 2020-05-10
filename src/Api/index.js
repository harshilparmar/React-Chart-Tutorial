import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const getData = async () => {
  try {
    let {
      data: { confirmed, deaths, lastUpdate, recovered },
    } = await axios.get(url);
    return { confirmed, deaths, lastUpdate, recovered };
  } catch (error) {}
};

export const getDailyData = async () => {
  try {
    let { data } = await axios.get(`${url}/daily`);

    let modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};
