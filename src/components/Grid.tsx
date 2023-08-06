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
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  })

  return (
    <DataGrid
      initialState={{
        sorting: {
          sortModel,
        },
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      rows={rows}
      columns={columns}
      pageSizeOptions={[10, 50, 100]}
      autoHeight={true}
      disableColumnMenu={true}
      isRowSelectable={() => false}
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
