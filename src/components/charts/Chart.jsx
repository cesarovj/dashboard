import './chart.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

function Chart({ data, title }) {
    return (
        <div className='chart'>
            <h2 className='chartTitle'>{title}</h2>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type='monotone'
                        dataKey='orders'
                        stroke='#8884d8'
                        activeDot={{ r: 8 }}
                    />
                    <Line type='monotone' dataKey='visits' stroke='#82ca9d' />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
