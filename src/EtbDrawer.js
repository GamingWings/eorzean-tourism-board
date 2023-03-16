import React from 'react';
import { useTheme } from '@mui/material/styles';

import {
  Divider,
  Drawer,
  Toolbar,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
} from '@mui/material';
import { SORT_COLUMNS } from './Constants';

function EtbDrawer({
  searchTerm,
  onChangeSearchTerm,
  sortColumn,
  onChangeSortColumn,
  filterFound,
  onChangeFilterFound,
  filterSecondBatch,
  onChangeFilterSecondBatch,
  open,
  onClose,
}) {
  const theme = useTheme();
  const isXlUp = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Drawer
      variant={isXlUp ? 'permanent' : 'temporary'}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Toolbar />
      <Divider />
      <TextField
        label="Search"
        type="search"
        value={searchTerm}
        onChange={({ target: { value } }) => onChangeSearchTerm(value)}
      />

      <TextField
        select
        label="Sort By"
        value={sortColumn}
        onChange={({ target: { value } }) => onChangeSortColumn(value)}
      >
        {SORT_COLUMNS.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <FormControlLabel
        label="Hide Collected"
        control={
          <Checkbox
            checked={filterFound}
            onChange={({ target: { checked } }) => onChangeFilterFound(checked)}
          />
        }
      />
      <FormControlLabel
        label="Hide Second Batch"
        control={
          <Checkbox
            checked={filterSecondBatch}
            onChange={({ target: { checked } }) =>
              onChangeFilterSecondBatch(checked)
            }
          />
        }
      />
    </Drawer>
  );
}

export default EtbDrawer;
