import React from 'react';
import chart from '../chart.json';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Recharts = () => {
  console.log(chart.places);

  const data = Object.entries(chart.places).map(([place, values]) => ({
    place,
    count: values.count,
    percentage: values.percentage,
  }));
console.log(data)
  return (
    <div>
      <LineChart width={900} height={500} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="place" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
        <Line type="monotone" dataKey="percentage" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Recharts;
