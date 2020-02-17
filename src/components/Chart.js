import React from "react";
import { Doughnut } from "react-chartjs-2";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        chartData : {}
    };
  }

  componentDidMount() {
    this.setState({
      chartData: {
        labels: ["Html5", "Css", "JavaScript", "ReactJs", "NodeJs", "Python"],
        datasets: [
          {
            label: "Ability",
            data: [20, 30, 20, 15, 10, 5],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(75,192,192,0.6)",
              "rgba(153,102,255,0.6)",
              "rgba(147,209,77,0.6)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="chart">
        <Doughnut data={this.state.chartData} options={{}} />
      </div>
    );
  }
}
