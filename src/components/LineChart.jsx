'use client';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const LineChart = () => {
  const { data, selectedState } = useSelector((state) => state.covid);

  const chartData = selectedState
    ? data.filter((item) => item.state === selectedState)
    : data;

  const isSingle = chartData.length === 1;

  const xData = isSingle
    ? ['←', chartData[0].state, '→']
    : chartData.map((item) => item.state);

  const getY = (key) =>
    isSingle
      ? [null, chartData[0][key], null]
      : chartData.map((item) => item[key]);

  return (
    <div className="w-full">
      <Plot
        data={[
          {
            x: xData,
            y: getY('total'),
            name: 'Total',
            type: 'scatter',
            mode: 'lines+markers',
            line: { color: '#636EFA' },
          },
          {
            x: xData,
            y: getY('active'),
            name: 'Active',
            type: 'scatter',
            mode: 'lines+markers',
            line: { color: '#EF553B' },
          },
          {
            x: xData,
            y: getY('recovered'),
            name: 'Recovered',
            type: 'scatter',
            mode: 'lines+markers',
            line: { color: '#00CC96' },
          },
          {
            x: xData,
            y: getY('deaths'),
            name: 'Deaths',
            type: 'scatter',
            mode: 'lines+markers',
            line: { color: '#AB63FA' },
          },
        ]}
        layout={{
          title: 'COVID Trend by States',
          height: 400,
          margin: { t: 40, l: 50, r: 20, b: 40 },
          xaxis: { title: 'State' },
          yaxis: { title: 'Cases' },
          legend: { orientation: 'h' },
        }}
        config={{ responsive: true }}
        style={{ width: '100%' }}
        useResizeHandler
      />
    </div>
  );
};

export default LineChart;
