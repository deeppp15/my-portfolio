import React from 'react'
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
)

function GitChart() {
  const data = {
    labels: [
      'Code Review',
      'Issues',
      'Pull requests',
      'Commits'
    ], 
    datasets: [{
      data: [29, 13, 15, 43],
      fill: true,
      backgroundColor: 'rgba(39, 107, 61, 0.5)', 
      borderColor: '#2F9E47',
      pointBackgroundColor: '#5aff78', 
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#5aff78', 
      pointHoverBorderColor: '#fff' 
    }]
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: '#276B3D', 
          lineWidth: 3 
        },
        grid: {
          display: false 
        },
        pointLabels: {
          color: '#959CA6',
          font: {
            size: 14
          }
        },
        ticks: {
          display: false 
        }
      }
    },
    plugins: { tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const value = tooltipItem.raw;
            return `${value}%`;
          }
        }
      },
      legend: {
        display: false 
      }
    }
  };

  return (
    <div id='gitStats' style={{ width: "30%", height: "30%" }}> {/* Dark background */}
      <Radar data={data} options={options}></Radar>
    </div>
  )
}

export default GitChart;
