import React from 'react';
import styles from '../assets/styles/components/PieChart.module.sass';
import { ResponsiveContainer, PieChart as Chart, Pie, Cell } from 'recharts';

const dataMock = [
  {
    name: 'Favourites',
    visits: 130
  },
  {
    name: 'No favourites',
    visits: 70
  }
];

const COLORS = ['#0088FE', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChart = ({ data = dataMock, children }) => {
  return (
    <div className={styles.chartContainer}>
      {children}
      <ResponsiveContainer>
        <Chart>
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            fill='#8884d8'
            dataKey='visits'
            legendType='cross'
            nameKey='a'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </Chart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
