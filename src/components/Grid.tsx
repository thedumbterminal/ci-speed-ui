import { DataGrid, GridColDef, GridSortModel } from '@mui/x-data-grid'
import * as React from 'react'

interface GridRow {
  id: number
}

interface GridProps {
  rows: GridRow[]
  columns: GridColDef[]
  isLoading: boolean
  sortModel?: GridSortModel
}

const Grid = ({ rows, columns, isLoading, sortModel = [] }: GridProps) => {
  const [pageSize, setPageSize] = React.useState(10)

  return (
    <DataGrid
      initialState={{
        sorting: {
          sortModel,
        },
      }}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      rowsPerPageOptions={[10, 50, 100]}
      autoHeight={true}
      disableColumnMenu={true}
      disableSelectionOnClick={true}
      loading={isLoading}
      sx={{
        boxShadow: 2,
        border: 2,
        borderColor: 'primary.light',
        '& .MuiDataGrid-cell--editable': {},
      }}
    />
  )
}

export { Grid }

export type { GridRow }
