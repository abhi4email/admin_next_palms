import { Grid, Box, Button, DialogActions, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';

export interface EditCustomerProps {
  customer?: any;
  handleClose?: any;
  onSuccessfulEdit?: any;
  onErrorEdit?: any;
  editMode: boolean;
}

export const EditCustomer: React.FC<EditCustomerProps> = ({
  customer,
  handleClose,
  onSuccessfulEdit,
  onErrorEdit,
  editMode,
}) => {
  const [route, setRoute] = React.useState(customer?.route);
  const [routeLink, setRouteLink] = React.useState(customer?.route_link);

  const [name, setName] = React.useState(name ? customer?.name : '');
  const [email, setEmail] = React.useState(email ? customer?.email : '');

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const submitHandler = (data, e) => {
    e.preventDefault();
    //Call Service Api here
    console.log('Succesfully submit', name, 'Email : ', email);
  };

  function errorHandler(errors, e) {
    //Error Message Call here
  }

  function closeDialog() {
    handleClose();
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiFormControl-root': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(submitHandler, errorHandler)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              id="outlined-required"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions>
          <Button type="submit">Save</Button>
          <Button type="button" onClick={closeDialog}>
            Cancel
          </Button>
        </DialogActions>
      </Box>
    </>
  );
};
