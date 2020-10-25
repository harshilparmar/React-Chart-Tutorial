import React, { Fragment, useState } from "react";
import Chart from "../../components/Chart/Chart";
import styles from "./Form.module.css";

const initialState = {
  dailyData: [
    {
      activity: "",
      timeSpent: 0,
    },
  ],
  chartLabels: [],
  chartData: [],
  chartColot: [],
};

const Form = (props) => {
  const [state, setstate] = useState(initialState);

  const onChange = (e, index) => {
    let { name, value } = e.target;

    let updatedState = [...state.dailyData];

    updatedState[index][name] = value;

    setstate((previousState) => {
      return {
        ...previousState,
        dailyData: [...updatedState],
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let chartLabels = state.dailyData
      .map((data) => {
        return data.activity;
      })
      .filter((e) => e);
    let chartData = state.dailyData
      .map((data) => {
        return parseInt(data.timeSpent);
      })
      .filter((e) => e);

    setstate((previousState) => {
      return {
        ...previousState,
        chartData: chartData,
        chartLabels: chartLabels,
      };
    });
  };

  const addExtraField = (e) => {
    let extraActivity = [
      ...state.dailyData,
      {
        activity: "",
        timeSpent: 0,
      },
    ];

    setstate((previousState) => {
      return {
        ...previousState,
        dailyData: [...extraActivity],
      };
    });
  };

  return (
    <>
      <h2>Daily Activity Management</h2>
      <form className={styles.form}>
        {state.dailyData.map((data, index) => (
          <Fragment key={index}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  name="activity"
                  value={data.activity}
                  className="form-control"
                  onChange={(e) => onChange(e, index)}
                  placeholder="Activity"
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  name="timeSpent"
                  value={data.timeSpent}
                  className="form-control"
                  onChange={(e) => onChange(e, index)}
                  placeholder="Time Spent"
                />
              </div>
            </div>
            <br />
          </Fragment>
        ))}

        <button
          type="button"
          style={{ marginRight: "25px" }}
          name="addNew"
          onClick={addExtraField}
          className="btn btn-outline-success"
        >
          Add Activity
        </button>
        <button type="submit" onClick={onSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
      {state.chartData.length && state.chartLabels.length ? (
        <Chart {...state} />
      ) : null}
    </>
  );
};
export default Form;
