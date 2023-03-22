import React from 'react';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Drawer,
  Link,
  Toolbar,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
} from '@mui/material';
import { SORT_COLUMNS } from './Constants';
import { styled } from '@mui/system';

const FilterContent = styled('section')`
  display: grid;
  gap: 1rem;
  padding: 0 10px;
`;

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
  numberFound,
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
      <FilterContent>
        <Toolbar>{`${numberFound} / 80 Collected`}</Toolbar>
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
              onChange={({ target: { checked } }) =>
                onChangeFilterFound(checked)
              }
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
      </FilterContent>
      <Box
        style={{
          marginTop: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '20px',
          paddingTop: '20px',
        }}
      >
        <Link
          href="https://github.com/GamingWings/eorzean-tourism-board"
          target="_blank"
          rel="noopener"
        >
          <Chip
            clickable
            avatar={
              <Avatar alt="Github Logo">
                <GitHubIcon />
              </Avatar>
            }
            label="GitHub"
          />
        </Link>
      </Box>
    </Drawer>
  );
}

export default EtbDrawer;
