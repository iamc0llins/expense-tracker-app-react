import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"

function Chart(props) {
  const valueArray = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMax = Math.max(...valueArray)
  console.log(valueArray)
  console.log(totalMax)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
