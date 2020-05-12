import React from 'react';
import styles from '../assets/styles/components/BarChart.module.sass';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line
} from 'recharts';

const dataMock = [
  {
    date: 'May 15',
    visits: 600
  },
  {
    date: 'May 16',
    visits: 850
  },
  {
    date: 'May 17',
    visits: 1400
  },
  {
    date: 'May 18',
    visits: 1500
  },
  {
    date: 'May 19',
    visits: 1550
  },
  {
    date: 'May 20',
    visits: 1400
  },
  {
    date: 'May 21',
    visits: 1000
  }
];

const BarChart = ({ data = dataMock, children }) => {
  return (
    <div className={styles.chartContainer}>
      <h2 />
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 5,
            left: -20,
            bottom: 5
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='visits' barSize={10} fill='#4424A6' />
          <Line type='monotone' dataKey='visits' stroke='#ff7300' />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
