import "./App.css";
import Chart from "./components/Chart";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        datasets: [
          {
            label: "Historical Prices",
            data: {
              labels: [
                "2019-01-15",
                "2018-02-14",
                "2017-03-13",
                "2016-04-12",
                "2015-05-11",
                "2014-06-11",
                "2013-07-11",
                "2012-08-11",
                "2011-09-11",
                "2010-10-11",
                "2009-11-11",
                "2008-12-11",
              ],
              datasets: {
                label: "Value",
                data: [
                  31.88,
                  31.88,
                  31.88,
                  31.88,
                  31.88,
                  31.88,
                  31.88,
                  31.88,
                  31.88,
                  31.88,
                  31.88,
                  31.88,
                ],
              },
            },
            showLine: true,
            pointRadius: 0,
            borderColor: "blue",
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        ],
      },
      predictData: {
        datasets: [
          {
            label: "Predict Prices",
            data: {
              labels: [
                "2019-01-15",
                "2018-02-14",
                "2017-03-13",
                "2016-04-12",
                "2015-05-11",
                "2014-06-11",
                "2013-07-11",
                "2012-08-11",
                "2011-09-11",
                "2010-10-11",
                "2009-11-11",
                "2008-12-11",
              ],
              datasets: {
                label: "Value",
                data: [
                  40.88,
                  40.88,
                  40.88,
                  40.88,
                  40.88,
                  40.88,
                  40.88,
                  40.88,
                  40.88,
                  40.88,
                  40.88,
                  40.88,
                ],
              },
            },
            showLine: true,
            pointRadius: 5,
            borderColor: "red",
            backgroundColor: "rgba(0,0,0,0.1)",
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Chart
          companyName={"Test"}
          companySymbol={"TT"}
          chartData={this.state.chartData}
          predictData={this.state.predictData}
        />
      </div>
    );
  }
}

export default App;
