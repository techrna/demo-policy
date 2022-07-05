import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumns } from '@mui/x-data-grid';





export default function PolicyDataGrid(props: { rows: readonly any[]; cols: GridColumns<any>; }) {

  return (
    <Box sx={{ height: 400, width: '100%' }}>
 
      <DataGrid
        getRowId={(r) => r._id}
        rows={props.rows}
        columns={props.cols}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    
  
  </Box>
  );
}
