import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { ReactNode } from 'react';
//import Css from "./CustomDialog.css"

export interface CustomDialogProps {
  children?: ReactNode;
  title?: string;
  customButton?: any;
  forceAction?: boolean;
  showCancelButton?: boolean;
}

export const CustomDialog: React.FC<CustomDialogProps> = ({
  children,
  customButton,
  title,
  forceAction,
  showCancelButton,
}) => {
  const [open, setOpen] = React.useState(false);
  if (forceAction) {
    setOpen(forceAction);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { handleClose });
    }
    return child;
  });

  return (
    <Dialog
      open={open}
      PaperProps={{
        style: {
          maxWidth: '100%',
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
