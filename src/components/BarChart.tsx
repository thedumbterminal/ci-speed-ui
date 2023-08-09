import React from 'react'
import {
  Axis,
  Grid,
  BarSeries,
  XYChart,
  Tooltip,
  BarGroup,
  buildChartTheme,
} from '@visx/xychart'
import { RenderTooltipParams } from '@visx/xychart/lib/components/Tooltip'
import { useTheme } from '@mui/material/styles'
import Datum from '../shared/Datum'
import XAxisDataType from '../shared/XAxisDataType'
import { humanDateTimeFormat, humanDateFormat } from '../lib/date'

type ChartProps = {
  height: number
  data: Datum[]
  xAxisLabel: string
  xAxisUnit?: string
  xAxisType?: XAxisDataType
}

const accessors = {
  xAccessor: (d: Datum) => d.x,
  yAccessor: (d: Datum) => d.y,
  onPointerUp: () => console.log('test'),
  onPointerMove: () => console.log('test'),
  onPointerOut: () => console.log('test'),
  onBlur: () => console.log('test'),
  onFocus: () => console.log('test'),
  onPointerDown: () => console.log('test'),
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

const _formatDate = (value: string, type: XAxisDataType): string => {
  if (type === 'DateTime') {
    return humanDateTimeFormat(value)
  } else if (type === 'Date') {
    return humanDateFormat(value)
  } else {
    throw new Error('Unsupported date type')
  }
}

const _transformDateForTimeSeries = (
  data: Datum[],
  xAxisType: XAxisDataType = XAxisDataType.DateTime,
): Datum[] => {
  return data.map((item: Datum) => {
    return {
      x: _formatDate(item.x, xAxisType),
      y: item.y,
    }
  })
}

const _generateXAxisLabel = (
  text: string,
  unit: string | undefined,
): string => {
  if (!unit) return text
  return `${text} (${unit})`
}

const BarChart = ({
  height,
  data = [],
  xAxisLabel,
  xAxisUnit,
  xAxisType,
}: ChartProps) => {
  const muiTheme = useTheme()
  const customTheme = buildChartTheme({
    backgroundColor: muiTheme.palette.background.paper,
    colors: [muiTheme.palette.secondary.main],
    tickLength: 1,
    gridColor: muiTheme.palette.grey[200],
    gridColorDark: muiTheme.palette.grey[600],
  })
  data = _transformDateForTimeSeries(data, xAxisType)

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
        <Axis numTicks={4} label="Date" orientation="bottom" />
        <Axis label={xLabel} orientation="left" />
        <Grid columns={true} />
        <BarGroup>
          <BarSeries dataKey={xAxisLabel} data={data} {...accessors} />
        </BarGroup>
        <Tooltip<Datum> renderTooltip={toolTipFunc} />
      </XYChart>
    </div>
  )
}

export default BarChart
