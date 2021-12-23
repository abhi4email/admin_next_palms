import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { GridColDef, GridCellValue, GridApi } from '@mui/x-data-grid-pro';
import { DataGrid } from '../../components/DataGrid';
import { CustomDialog } from '../../components/CustomDialog';
import { getCustomers } from '../../service/customer';

import Layout from 'Layouts';

const headCells: GridColDef[] = [
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    renderCell: (params) => {
      const onEdit = (event: any) => {
        event.stopPropagation();
        console.log('Select Row Data', params.id);
      };
      return <Button onClick={onEdit}>Edit</Button>;
    },
  },
  { field: 'customer_name', headerName: 'Customer Name', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'first_name', headerName: 'First Name', flex: 1 },
  { field: 'last_name', headerName: 'Last Name', flex: 1 },
  { field: 'phone', headerName: 'Phone', flex: 1 },
];

export default function Customer(): JSX.Element {
  const router = useRouter();

  let filterName = router.query.hasOwnProperty('route') ? router.query.route : 'All';
  let { customers: customers = [] } = getCustomers({ route: filterName });

  return (
    <Layout title="Customer list">
      <CustomDialog title="Raj Kumar">
        <div>ddddddddddd</div>
      </CustomDialog>

      <DataGrid data={customers} headCells={headCells} checkboxSelection={true}></DataGrid>
    </Layout>
  );
}

Customer.auth = true;
