import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import '../App.css';

import automationtesting from '../assets/Certificates/automationtesting.jpg';


export default function ResponsiveModal() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <br />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent style={
            {
                display: "flex",
                alignItems: "center",
                width: "85%",
                height: "100%",
                margin: "auto"
            }
        }>
          <DialogContentText style={
            {
                display: "flex",
                alignItems: "center",
                width: "85%",
                height: "100%",
                margin: "auto"
            }
        }>
          <img src={automationtesting} alt="" />
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
    </React.Fragment>
  );
}