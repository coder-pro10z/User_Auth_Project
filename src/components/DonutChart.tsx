import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartOptions, ChartData } from 'chart.js/auto'; // Import the types
import colors from '../styles/colors.module.scss'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(ArcElement, Tooltip, Legend);

  type AreaName = 'Work' | 'Exercise' | 'Leisure' | 'Sleep' | 'Other';

interface DonutChartProps {
  areas: {    area: AreaName;
    hours: number; }[]; // Define the type of the prop
}
const areaColors = {
    Work: colors.workColor,
    Exercise: colors.exerciseColor,
    Leisure: colors.leisureColor,
    Sleep: colors.sleepColor,
    Other: colors.otherColor,
  };

const DonutChart: React.FC<DonutChartProps> = ({ areas }) => {
  const data = {
    labels: areas.map(area => area.area), // Extract labels from areas prop
    // datasets: [
    //   {
    //     data: areas.map(area => area.hours), // Extract data from areas prop
    //     backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    //   },
    // ],
    datasets: [
        {
          data: areas.map((area) => area.hours),
          backgroundColor: areas.map(area => areaColors[area.area]),
        },
      ],
  };

  const options: ChartOptions<'doughnut'> = {
    cutout: '65%',
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '25vw', height: '25vw' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;

