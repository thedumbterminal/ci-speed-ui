import React from 'react';
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedBarSeries,
  XYChart,
  Tooltip,
  BarGroup
} from '@visx/xychart';

export type BarsProps = {
  height: number;
};

type Datum = { x: string; y: number };

const Chart = ({ height }: BarsProps) => {

  const data1 = [
    { x: '2020-01-01', y: 50 },
    { x: '2020-01-02', y: 10 },
    { x: '2020-01-03', y: 20 },
  ];
    
  const accessors = {
    xAccessor: (d: Datum) => d.x,
    yAccessor: (d: Datum) => d.y,
  };

  const renderTooltip = ({ tooltipData, colorScale }) => (
    <>
      <div style={{ color: colorScale(dataKey) }}>{dataKey}</div>
      <br />
      {xAccessor(tooltipData.datumByKey[dataKey].datum)}:{" "}
      {yAccessor(tooltipData.datumByKey[dataKey].datum).toFixed(2)}
    </>
  )

  return (
    <XYChart height={height} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
      <AnimatedAxis orientation="bottom" />
      <AnimatedAxis orientation="left" />
      <AnimatedGrid columns={true} />
      <BarGroup>
        <AnimatedBarSeries dataKey="Line 1" data={data1} {...accessors} />
      </BarGroup>
      <Tooltip<Datum>
        renderTooltip={renderTooltip}
      />
    </XYChart>
  );
}

export default () => {
  return (
    <>
      <p>Bar chart will go here.</p>
      <Chart
        height={200}
      />
    </>
  )
}
