import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';
import { GridColDef, GridCellValue, GridApi } from '@mui/x-data-grid-pro';
import { DataGrid } from '../../components/DataGrid';
import { CustomDialog } from '../../components/CustomDialog';
import { getCustomers } from '../../service/customer';
import { EditCustomer } from './EditCustomer';

import Layout from 'Layouts';

export default function Customer(): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = React.useState(false);

  const headCells: GridColDef[] = [
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => {
        const onEdit = (event: any) => {
          event.stopPropagation();
          console.log('Select Row Data', params.id);
          setIsEdit(true);
        };
        return <Button startIcon={<EditIcon />} onClick={onEdit}></Button>;
      },
    },
    { field: 'customer_name', headerName: 'Customer Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'first_name', headerName: 'First Name', flex: 1 },
    { field: 'last_name', headerName: 'Last Name', flex: 1 },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'route', headerName: 'Route', flex: 1 },
    { field: 'ship_city', headerName: 'Ship City', flex: 1 },
  ];

  const closePopup = () => {
    setIsEdit(false);
  };
  const openSnackbarAction = () => {
    console.log('Successs');
  };

  let filterName = router.query.hasOwnProperty('route') ? router.query.route : 'All';
  let { customers: customers = [] } = getCustomers({ route: filterName });

  return (
    <Layout title="Customer list">
      {isEdit && (
        <CustomDialog title="Edit Customer" isOpen={isEdit} onClose={closePopup}>
          <EditCustomer
            customer={{ name: 'raj' }}
            editMode={false}
            onSuccessfulEdit={openSnackbarAction}
            handleClose={closePopup}
          ></EditCustomer>
        </CustomDialog>
      )}

      <DataGrid data={customers} headCells={headCells} checkboxSelection={true}></DataGrid>
    </Layout>
  );
}

Customer.auth = true;
