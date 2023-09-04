// Import necessary dependencies from React and Redux and Axios
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

// Define a type for the API response
interface CovidDataResponse {
  cases: {
    [date: string]: number;
  };
}

const Linechart = () => {
  // Define state variables for COVID-19 data and loading indicator
  const [covidData, setCovidData] = useState<CovidDataResponse>({
    cases: {},
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch COVID-19 historical data from the API when the component mounts
    axios
      .get<CovidDataResponse>(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      )
      .then((response) => {
        // Check if the 'cases' data is available in the response
        if (response.data && response.data.cases) {
          setCovidData(response.data);
          setLoading(false);
        } else {
          console.error("No cases data found:", response);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Define chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "COVID-19 Cases Over Time",
      },
    },
  };

  // Define a function to format the chart data
  const getChartData = () => {
    if (loading || !covidData || !covidData.cases) {
      return {
        labels: [],
        datasets: [],
      };
    }

    const labels = Object.keys(covidData.cases);
    const casesData = Object.values(covidData.cases);

    const datasets = [
      {
        label: "Total Cases",
        data: casesData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ];

    return {
      labels,
      datasets,
    };
  };

  return (
    <div>
      {loading ? (
        // Display a loading message while fetching data
        <p>Loading chart...</p>
      ) : (
        // Render the Line chart using the data and options
        <Line data={getChartData()} width={100} height={70} options={options} />
      )}
    </div>
  );
};

export default Linechart;
