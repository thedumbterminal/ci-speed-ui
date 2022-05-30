import React from 'react'
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedBarSeries,
  XYChart,
  Tooltip,
  BarGroup
} from '@visx/xychart'
import { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip'

type Datum = {
  x: string;
  y: number
}

type ChartProps = {
  height: number
  data: Datum[]
}

const accessors = {
  xAccessor: (d: Datum) => d.x,
  yAccessor: (d: Datum) => d.y,
}

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

export default ({ height, data }: ChartProps) => {
  return (
    <XYChart height={height} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
      <AnimatedAxis orientation="bottom" />
      <AnimatedAxis orientation="left" />
      <AnimatedGrid columns={true} />
      <BarGroup>
        <AnimatedBarSeries dataKey="Line" data={data} {...accessors} />
      </BarGroup>
      <Tooltip<Datum>
        renderTooltip={renderTooltip}
      />
    </XYChart>
  )
}
