import React,{PureComponent} from 'react';
import {data} from '../dataF/Placeholder'
import {
  LineChart, Line, XAxis,YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const Recharts = () => {
    
return (
    
  <LineChart
    width={500}
    height={200}
    data={data.exercise}
    margin={{ top: 5, right : 20, left: 10, bottom: 5 }}
  >
    <XAxis dataKey="name" />
    <YAxis/>
    <Tooltip />
    <CartesianGrid stroke="#f5f5f5"  />
    <Line type="monotone" dataKey="intensity" stroke="#ff7300" yAxisId={0} /* activeDot={{ r: 6 }} */ />
    <Line type="monotone" dataKey="" stroke="#387908" yAxisId={1} /* activeDot={{r:6}} */ />
  </LineChart>
 
)
}

export default Recharts;

