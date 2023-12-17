import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

const DotChart = () => {
    const data = [
        {
          name: 'Bangladesh',
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490,
        },
        {
          name: 'India',
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590,
        },
        {
          name: 'Pakistan',
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350,
        },
        {
          name: 'Bhutan',
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480,
        },
        {
          name: 'Nepal',
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460,
        },
        {
          name: 'Afghanistan',
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380,
        },
      ];
    return (
        
             <ComposedChart
             width={500}
             height={300}
             data={data}>

            <Line dataKey="uv"></Line>
            <Line dataKey="pv"></Line>
            <Line dataKey="amt"></Line>
            <Line dataKey="cnt"></Line>
            <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />

             </ComposedChart>
       
    );
};

export default DotChart;