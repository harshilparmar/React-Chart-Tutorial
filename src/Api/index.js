import axios from "axios";

const url = "https://api.covid19india.org/data.json";

export const getData = async () => {
  try {
    let {
      data: { statewise },
    } = await axios.get(url);
    return { statewise };
  } catch (error) {}
};

export const getStateVise = async (state) => {
  try {
    let { data } = await axios.get(
      `https://api.covid19india.org/state_district_wise.json`
    );

    return data;
  } catch (error) {}
};

export const getCountry = async () => {
  try {
    let response = await axios.get(`${url}/countries`);
    return response;
  } catch (error) {}
};
