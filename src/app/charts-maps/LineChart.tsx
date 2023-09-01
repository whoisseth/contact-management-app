/** @format */
"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// @ts-ignore
export function LineChart({ data }) {
  console.log("line chart data", data);
  const dataArray = [];

  // Iterate through the object properties and push their values into the array
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      dataArray.push(data[key]);
    }
  }

  const options = {
    title: {
      text: "cases fluctuations"
    },

    xAxis: {
      tickInterval: 1
    },

    yAxis: {
      type: "logarithmic",
      minorTickInterval: 0.1,
      accessibility: {
        rangeDescription: "Range: 0.1 to 1000"
      }
    },

    tooltip: {
      headerFormat: "<b>{series.name}</b><br />",
      pointFormat: "x = {point.x}, y = {point.y}"
    },

    series: [
      {
        // data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        data: dataArray,
        pointStart: 1
      }
    ]
  };

  return (
    <div className="App">
      <h2 className="text-4xl font-bold text-center mt-10 mb-5 text-gray-700 dark:text-gray-200  p-2 rounded-md bg-gray-100 dark:bg-gray-900 dark:border-gray-700 border-2 border-gray-300">
        World wide data of cases
      </h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
