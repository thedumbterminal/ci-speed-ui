import React from 'react';
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedBarSeries,
  XYChart,
  Tooltip,
  BarGroup
} from '@visx/xychart';

import {RenderTooltipParams} from '@visx/xychart/lib/components/Tooltip'
export type BarsProps = {
  height: number;
};

type Datum = { x: string; y: number };

const accessors = {
  xAccessor: (d: Datum) => d.x,
  yAccessor: (d: Datum) => d.y,
};

const renderTooltip = ({ tooltipData, colorScale }: RenderTooltipParams<Datum>) => {
  const datum = tooltipData?.nearestDatum?.datum
  return (
    <>
      <div style={{ color: colorScale && colorScale(tooltipData?.nearestDatum?.key || '') }}>{tooltipData?.nearestDatum?.key}</div>
      <br />
      {datum && accessors.xAccessor(datum)}:{" "}
      {datum && accessors.yAccessor(datum).toFixed(2)}
    </>
  )
}

const data1 = [
  { x: '2020-01-01', y: 50 },
  { x: '2020-01-02', y: 10 },
  { x: '2020-01-03', y: 20 },
];

const Chart = ({ height }: BarsProps) => {
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
