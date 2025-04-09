'use client';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const PieChart = () => {
  const { data, selectedState } = useSelector(state => state.covid);

  const filtered = selectedState
    ? data.find(d => d.state === selectedState)
    : data.reduce(
        (acc, cur) => {
          acc.active += cur.active;
          acc.recovered += cur.recovered;
          acc.deaths += cur.deaths;
          return acc;
        },
        { active: 0, recovered: 0, deaths: 0 }
      );

  return (
    <Plot
      data={[
        {
          type: 'pie',
          labels: ['Active', 'Recovered', 'Deaths'],
          values: [filtered.active, filtered.recovered, filtered.deaths],
        },
      ]}
      layout={{
        title: 'Covid Status Distribution',
        legend: {
          orientation: 'h',
          x: 0.5,
          y: -0.2,
        },
        margin: { t: 40, b: 80 },
      }}
      style={{ width: '100%' }}
      useResizeHandler
    />
  );
};

export default PieChart;
