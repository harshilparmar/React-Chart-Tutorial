import React, { Component } from "react";
import { Cards, Chart, CountryPicker, StateChart } from "./components";
import { getData, getStateVise } from "./Api";
import styles from "./App.module.css";
import Form from "./components/Form/Form";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: {},
      state: {},
      activity : ["Movie","Coding","Tv","Reading","Cooking"],
      timeSpent : [2,3,1.5,1,3],
      selectedState: "",
      districtState: {},
    };
    this.onChange = this.onChange.bind(this);
  }

  async componentDidMount() {
    let { statewise } = await getData();
    this.setState({ total: statewise[0], state: statewise.slice(1) });
  
  }

  async onChange(state) {
    this.setState({ selectedState: state });
    let districtState = await getStateVise(state);
    Object.keys(districtState).map((stateData) => {
      if (stateData == state) {
        this.setState({ districtState: districtState[stateData].districtData });
        return districtState[stateData];
      }
    });
  }

  render() {
    return (
      <div className={styles.container}>
          <Form/>
      </div>
    );
  }
}
export default App;
