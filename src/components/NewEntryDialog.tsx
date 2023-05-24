import React from 'react'
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  TextField
} from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote'

import * as store from '../store.tsx'

export default function NewEntryDialog () {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [entryHeadmates, setEntryHeadmates] = React.useState([]);
  const [entryDescription, setEntryDescription] = React.useState('');

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
    setEntryHeadmates(
      store.get('headmates')
        .map(headmate => headmate.name)
    );
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleAddNewEntry = () => {
    console.log(entryDescription);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleDialogOpen}
        color="secondary"
        variant="contained"
        startIcon={<EditNoteIcon />}
      >
        New Entry
      </Button>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>New Entry</DialogTitle>
        <DialogContent>
          <Autocomplete
            id="new_entry_headmate"
            options={entryHeadmates}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                label="Headmate"
                variant="standard"
              />
            )}
          />
          <TextField
            autoFocus
            multiline
            margin="dense"
            id="new_entry_description"
            label="Description"
            type="text"
            variant="standard"
            onChange={e => {
              setEntryDescription(e.target.value)
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleAddNewEntry}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
