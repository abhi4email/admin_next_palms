import { DataGridPro, GridColDef, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid-pro';
import { Paper } from '@mui/material';
import React, { ReactNode } from 'react';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export interface DataGridProps {
  children?: ReactNode;
  data: any;
  headCells: GridColDef[];
  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
  [propName: string]: any;
}

export const DataGrid: React.FC<DataGridProps> = ({
  children,
  data,
  headCells,
  checkboxSelection = false,
  disableSelectionOnClick = true,
  ...rest
}) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {children}
      <div style={{ height: '90vh', width: '100%', flexWrap: 'wrap' }}>
        <DataGridPro
          rows={data}
          columns={headCells}
          checkboxSelection={checkboxSelection}
          disableSelectionOnClick={disableSelectionOnClick}
          rowHeight={25}
          components={{
            Toolbar: CustomToolbar,
          }}
          {...rest}
        />
      </div>
    </Paper>
  );
};
