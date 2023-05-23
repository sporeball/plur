import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import * as event from '../event.tsx'

function onNewHeadmate (...args) {
  const [data] = args;
  console.log(data);
}

event.on('new-headmate', onNewHeadmate);

export default function NewHeadmateDialog () {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [headmateName, setHeadmateName] = React.useState('');
  const [headmatePronouns, setHeadmatePronouns] = React.useState('');

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleAddNewHeadmate = () => {
    const data = {
      name: headmateName,
      pronouns: headmatePronouns
    };
    event.emit('new-headmate', data);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleDialogOpen}
        variant="contained"
        startIcon={<AddIcon />}
      >
        New Headmate
      </Button>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>New Headmate</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="new_headmate_name"
            label="Name"
            type="text"
            variant="standard"
            onChange={e => {
              setHeadmateName(e.target.value)
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            id="new_headmate_pronouns"
            label="Pronouns"
            type="text"
            variant="standard"
            onChange={e => {
              setHeadmatePronouns(e.target.value)
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleAddNewHeadmate}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
