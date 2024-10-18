import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  dataValue: number;
  totalValue: number;
  label: string
}

const DonutChart: React.FC<DonutChartProps> = ({ dataValue, totalValue, label }) => {
  const percentage = totalValue ? (dataValue / totalValue) * 100 : 0;
  const name = label

  const data = {
    labels: ["Value", "Remaining"],
    datasets: [
      {
        label: name,
        data: [percentage, 100 - percentage],
        backgroundColor: ["#36A2EB", "#E7E9ED"],
        hoverBackgroundColor: ["#36A2EB", "#E7E9ED"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%", // Controls the thickness of the donut ring
    plugins: {
      legend: {
        display: false, // Hide the legend if you don't want it
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.raw.toFixed(1)}%`,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
