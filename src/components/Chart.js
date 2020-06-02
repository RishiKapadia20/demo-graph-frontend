import React, { Component } from "react";
import { Scatter } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    console.log("Next props");
    let chartData = this.props.chartData.datasets;
    let predictData = this.props.predictData.datasets;

    console.log(chartData);
    if (
      typeof chartData !== "undefined" &&
      typeof predictData !== "undefined"
    ) {
      this.mergeData(this.props.chartData, this.props.predictData);
    }
  }

  mergeData = (chartData, predictData) => {
    let chartDataValues = chartData.datasets[0];
    let predictDataValues = predictData.datasets[0];

    let datasets = [];
    datasets = datasets.concat(chartDataValues);
    datasets = datasets.concat(predictDataValues);

    let data = { datasets };

    this.setState({
      data: data,
    });
  };

  render() {
    // var timeFormat = "YYYY-MM-DD";
    console.log("In render");
    console.log(this.state.data);

    return (
      <div className="chart">
        {" "}
        <Scatter
          data={{
            datasets: [
              {
                label: "test 1",
                data: [
                  { x: 1, y: 2 },
                  { x: 2, y: 4 },
                  { x: 3, y: 8 },
                  { x: 4, y: 16 },
                ],
                showLine: true,
                fill: false,
                borderColor: "rgba(0, 200, 0, 1)",
              },
              {
                label: "Chart 2",
                data: [
                  { x: 10, y: 20 },
                  { x: 30, y: 4 },
                  { x: 40, y: 6 },
                  { x: 60, y: 9 },
                ],
                showLine: true,
                fill: false,
                borderColor: "rgba(200, 0, 0, 1)",
              },
            ],
          }}
          options={{
            responsive: true,
            title: {
              display: true,
              text: this.props.companyName,
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "right",
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    // format: timeFormat,
                    // unit: "year"
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Date",
                  },
                },
              ],
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "value",
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
