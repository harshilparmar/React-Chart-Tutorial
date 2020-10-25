# Tutorial for How to use Chart.js in React

The purpose of this tutorial is to demonstrate how to use ChartJS in React. In this tutorial, a small activity logging system is created from scratch.  Based on the activity logged and hours spent, the user will be able to see the relevant chart formed on the screen. At the end of this tutorial, learners will get the basic understanding of ChartJS and can develop varieties of charts for bigger datasets in large web applications.

## Table of contents:
  * How will it work?
  * Prerequisites
  * Development 
  * Summary


## How will it work ?

The app will work according to given steps,

1. Enter activity & hours spent
1. Press Submit or Add another activity
1. Charts will be shown(based on the activity & hours logged)

Flow of the web application is shown below:
 [[IMAGE]]
 
## Prerequisites:

In order to develop the Activity Logging System, we need to use few things. 
Those are, 

- Install Node
- Install VSCode
- Install React
- Install Chart
- Install Bootstrap (optional)

Let’s walk through each of them,

1. Download Node:
[To download node](https://nodejs.org/en/download/)

1. Install VSCode:
    You can visit [here](https://code.visualstudio.com/download) to download VSCode according to your OS.

1. Install react:
    To install react on your machine, please run 
    ```npx create-react-app my-app```,

    You can visit [here](https://reactjs.org/docs/create-a-new-react-app.html) for official documentation.

1. Install Chart-js: ```npm install react-chartjs-2 chart.js```
    You can visit [here](https://www.npmjs.com/package/react-chartjs-2).
   
1. Install Bootstrap: ```npm i bootstrap```
    You can visit [here](https://www.npmjs.com/package/bootstrap).

## Development:

### Styling  in React
There are various technics to style react application.We have used CSS Modules style.
There is a separate style file for each component  `component-name.module.css`.
We can easily use that by importing them in js/jsx file and access that by `className={styles.form}`.

For more details,you can visit below links: 
- https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3
- https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

### Form component (Form.jsx)

#### Form in React
To make form in react, we have to make states which store local values and change it according to user-inputs.
For Function component we can use useState hook to make state.
```
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
```
By following  above code snippets, we can initialize state.

`const [state, setstate] = useState(initialState);`

Here initial state will become initial value for our form field.

```
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
```
There are two fields in our form:
1. Activity
2. Time spent during that activity (in hour)

Each field has value property which is linked to state for showing current value of state in a form.

```
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
```
Onchange event of form will be handle by onChange handler.It will take event object and index of current changed activity.
For that we can use setState method. 
For setting state we have to extract name and value from event object.
Here updatedState is temporary variable for mutating state.

For more details,you can visit below links: https://reactjs.org/docs/forms.html
 



## Summary:

In this tutorial, you learnt how to show data in the form of charts using react.

### Points covered:

- Add new input fields to react app dynamically.
- You can customise the look and feel of charts.
- Real time data representation in form of charts.
- Give random colors to the charts.
- Styling of input fields and buttons using Bootstrap.

### Future scopes:

- You can create charts for large data sets using react.
- You can create a Task Management System for an organization/school/universities.
- Customise charts to represent data in a more visually appealing way.


