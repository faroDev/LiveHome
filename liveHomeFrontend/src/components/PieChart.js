import React from 'react';

import favouritesIcon from '../assets/statics/images/like.png';
import { ResponsiveContainer, PieChart as Chart, Pie, Cell } from 'recharts';

import styles from '../styles/components/PieChart.module.sass';

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

const PieChart = ({ data = dataMock }) => {
  return (
    <div className={styles.chartContainer}>

      <div className={styles.info}>
        <img src={favouritesIcon} alt='Icon visitors' />
        <span><b>Favourites:</b> 10</span>
      </div>
      
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
