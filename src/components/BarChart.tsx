import React from 'react'
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedBarSeries,
  XYChart,
  Tooltip,
  BarGroup,
  buildChartTheme
} from '@visx/xychart'
import { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip'
import { useTheme } from '@mui/material/styles'

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

const margin = {
  top: 10,
  right: 10,
  left: 20,
  bottom: 20
}

export default ({ height, data }: ChartProps) => {
  const muiTheme = useTheme()
  const customTheme = buildChartTheme({
    backgroundColor: muiTheme.palette.background.paper,
    colors: [
      muiTheme.palette.secondary.main
    ],
    tickLength: 1,
    gridColor: muiTheme.palette.grey[200],
    gridColorDark: muiTheme.palette.grey[600]
  })
  return (
    <XYChart theme={customTheme} margin={margin} height={height} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
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
