import Plot from 'react-plotly.js';
import React from "react";

class Chart extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 900, height: 700, title: 'A Fancy Plot'} }
      />
    );
  }
}
export default Chart;
