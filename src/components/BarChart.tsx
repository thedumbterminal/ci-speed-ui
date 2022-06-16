import React from 'react'
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedBarSeries,
  XYChart,
  Tooltip,
  BarGroup,
  buildChartTheme,
} from '@visx/xychart'
import { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip'
import { useTheme } from '@mui/material/styles'
import Datum from '../shared/Datum'
import { isoStringFormat } from '../lib/date'

type ChartProps = {
  height: number
  data: Datum[]
  xAxiesLabel: string
}

const accessors = {
  xAccessor: (d: Datum) => d.x,
  yAccessor: (d: Datum) => d.y,
}

const margin = {
  top: 10,
  right: 10,
  left: 40,
  bottom: 40,
}

const renderTooltip = ({
  tooltipData,
  colorScale,
}: RenderTooltipParams<Datum>) => {
  const datum = tooltipData?.nearestDatum?.datum
  return (
    <>
      <div
        style={{
          color: colorScale && colorScale(tooltipData?.nearestDatum?.key || ''),
        }}
      >
        {tooltipData?.nearestDatum?.key}: {datum && accessors.yAccessor(datum)}
      </div>
      <br />
      {datum && accessors.xAccessor(datum)}
    </>
  )
}

const _transformDateForTimeSeries = (data: Datum[]): Datum[] => {
  return data.map((item: Datum) => {
    return {
      x: isoStringFormat(item.x),
      y: item.y,
    }
  })
}

export default ({ height, data = [], xAxiesLabel }: ChartProps) => {
  const muiTheme = useTheme()
  const customTheme = buildChartTheme({
    backgroundColor: muiTheme.palette.background.paper,
    colors: [muiTheme.palette.secondary.main],
    tickLength: 1,
    gridColor: muiTheme.palette.grey[200],
    gridColorDark: muiTheme.palette.grey[600],
  })
  data = _transformDateForTimeSeries(data)

  return (
    <XYChart
      theme={customTheme}
      margin={margin}
      height={height}
      xScale={{ type: 'band' }}
      yScale={{ type: 'linear' }}
    >
      <AnimatedAxis
        numTicks={4}
        animationTrajectory="min"
        label="Date"
        orientation="bottom"
      />
      <AnimatedAxis
        animationTrajectory="min"
        label={xAxiesLabel}
        orientation="left"
      />
      <AnimatedGrid columns={true} />
      <BarGroup>
        <AnimatedBarSeries dataKey={xAxiesLabel} data={data} {...accessors} />
      </BarGroup>
      <Tooltip<Datum> renderTooltip={renderTooltip} />
    </XYChart>
  )
}
