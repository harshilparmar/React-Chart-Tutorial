import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { getData } from "./Api";
import styles from "./App.module.css";
class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    let apiData = await getData();
    this.setState({ data: apiData });
  }
  render() {
    let { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}
export default App;
