import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { ReactNode } from 'react';
//import Css from "./CustomDialog.css"

export interface CustomDialogProps {
  children?: ReactNode;
  title?: string;
  customButton?: any;
  isOpen?: boolean;
  showCancelButton?: boolean;
  onClose: any;
}

export const CustomDialog: React.FC<CustomDialogProps> = ({
  children,
  customButton,
  title,
  isOpen = false,
  showCancelButton,
  onClose,
}) => {
  const [open, setOpen] = React.useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    // if (React.isValidElement(child)) {
    //   return React.cloneElement(child, { handleClose });
    // }
    return child;
  });

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth={'md'}
      PaperProps={{
        style: {
          //maxWidth: '100%',
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{childrenWithProps}</DialogContent>

      {showCancelButton && (
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      )}
    </Dialog>
  );
};
