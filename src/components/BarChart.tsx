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
  xAxisLabel: string
  xAxisUnit?: string
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

const _renderTooltipWithUnit = (unit: string | undefined) => {
  return ({ tooltipData, colorScale }: RenderTooltipParams<Datum>) => {
    const datum = tooltipData?.nearestDatum?.datum
    return (
      <>
        <div
          style={{
            color:
              colorScale && colorScale(tooltipData?.nearestDatum?.key || ''),
          }}
        >
          {tooltipData?.nearestDatum?.key}:{' '}
          {datum && accessors.yAccessor(datum)} {unit && unit}
        </div>
        <br />
        {datum && accessors.xAccessor(datum)}
      </>
    )
  }
}

const _transformDateForTimeSeries = (data: Datum[]): Datum[] => {
  return data.map((item: Datum) => {
    return {
      x: isoStringFormat(item.x),
      y: item.y,
    }
  })
}

const _generateXAxisLabel = (
  text: string,
  unit: string | undefined
): string => {
  if (!unit) return text
  return `${text} (${unit})`
}

export default ({ height, data = [], xAxisLabel, xAxisUnit }: ChartProps) => {
  const muiTheme = useTheme()
  const customTheme = buildChartTheme({
    backgroundColor: muiTheme.palette.background.paper,
    colors: [muiTheme.palette.secondary.main],
    tickLength: 1,
    gridColor: muiTheme.palette.grey[200],
    gridColorDark: muiTheme.palette.grey[600],
  })
  data = _transformDateForTimeSeries(data)

  // Need to set the height on an outer container as xychart will set it to 100% if we dont give
  // a width.
  const containerCssProps = {
    height,
  }

  const xLabel = _generateXAxisLabel(xAxisLabel, xAxisUnit)

  const toolTipFunc = _renderTooltipWithUnit(xAxisUnit)
  return (
    <div style={containerCssProps}>
      <XYChart
        theme={customTheme}
        margin={margin}
        height={200}
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
          label={xLabel}
          orientation="left"
        />
        <AnimatedGrid columns={true} />
        <BarGroup>
          <AnimatedBarSeries dataKey={xAxisLabel} data={data} {...accessors} />
        </BarGroup>
        <Tooltip<Datum> renderTooltip={toolTipFunc} />
      </XYChart>
    </div>
  )
}
