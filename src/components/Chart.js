import React from "react";
import { Doughnut } from 'react-chartjs-2';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render() {
    return (
      <div className="chart">
        <Doughnut data={data} options={{}} />
      </div>
    );
  }
}
