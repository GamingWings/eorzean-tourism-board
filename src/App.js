import './App.css';
import { React, useState, useCallback, useMemo, useEffect } from 'react';
import {
  DATA,
  SORT_COLUMN_KEY,
  SORT_COLUMN_START,
  SORT_COLUMN_END,
  LOCAL_STORAGE_KEY_SORT_COLUMN,
  LOCAL_STORAGE_KEY_SEARCH_TERM,
  LOCAL_STORAGE_THEME,
  LOCAL_STORAGE_ALREADY_FOUND_LIST,
  LOCAL_STORAGE_FILTER_FOUND,
  LOCAL_STORAGE_HIDE_SECOND_BATCH,
} from './Constants';
import SightLog from './SightLog';
import { Container } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Unstable_Grid2';
import Menu from './Menu';
import { Box } from '@mui/material';
import useDeepCompareEffect from 'use-deep-compare-effect';
import ThemePicker from './ThemePicker';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [storedTheme, setStoredTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_THEME)
  );
  const [logs, setLogs] = useState(
    Object.values(DATA).reduce(
      (acc, data) => ({
        ...acc,
        [data.Key]: {
          ...data,
          IsFound:
            localStorage.getItem(
              `${LOCAL_STORAGE_ALREADY_FOUND_LIST}-${data.Key}`
            ) === 'true',
        },
      }),
      {}
    )
  );
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [sortedLogs, setSortedLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY_SEARCH_TERM) ?? ''
  );
  const [sortColumn, setSortColumn] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY_SORT_COLUMN) ?? SORT_COLUMN_KEY
  );
  const [filterFound, setFilterFound] = useState(
    localStorage.getItem(LOCAL_STORAGE_FILTER_FOUND) === 'true'
  );
  const [hideSecondBatch, setHideSecondBatch] = useState(
    localStorage.getItem(LOCAL_STORAGE_HIDE_SECOND_BATCH) === 'true'
  );
  const [currentTime, setCurrentTime] = useState(Date.now());

  const updateCollectionWindow = useCallback(
    ({ Key, CollectableWindowStartTime, CollectableWindowEndTime }) => {
      setLogs((prevLogs) => ({
        ...prevLogs,
        [Key]: {
          ...prevLogs[Key],
          CollectableWindowStartTime,
          CollectableWindowEndTime,
        },
      }));
    },
    []
  );

  const handleChangeMarkAsFound = ({ Key, IsFound }) => {
    setLogs((prevLogs) => ({
      ...prevLogs,
      [Key]: {
        ...prevLogs[Key],
        IsFound,
      },
    }));
    localStorage.setItem(`${LOCAL_STORAGE_ALREADY_FOUND_LIST}-${Key}`, IsFound);
  };

  const handleChangeTheme = (newTheme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
    setStoredTheme(newTheme);
  };

  const handleChangeSearchTerm = (searchTerm) => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SEARCH_TERM, searchTerm);
    setSearchTerm(searchTerm);
  };

  const handleChangeSortColumn = (sortColumn) => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SORT_COLUMN, sortColumn);
    setSortColumn(sortColumn);
  };

  const handleChangeFilterFound = (value) => {
    localStorage.setItem(LOCAL_STORAGE_FILTER_FOUND, value);
    setFilterFound(value);
  };

  const handleChangeHideSecondBatch = (value) => {
    localStorage.setItem(LOCAL_STORAGE_HIDE_SECOND_BATCH, value);
    setHideSecondBatch(value);
  };

  // const numberFound = useMemo(() => {
  //   return Object.values(logs).filter(({isFound}) => isFound).length
  // }, [logs])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode:
            storedTheme === 'dark' || storedTheme === 'light'
              ? storedTheme
              : prefersDarkMode
              ? 'dark'
              : 'light',
        },
      }),
    [prefersDarkMode, storedTheme]
  );

  useEffect(() => {
    let ret = Object.values(logs);
    if (hideSecondBatch) {
      ret = ret.filter(({ Key }) => Key <= 20);
    }
    if (filterFound) {
      ret = ret.filter(({ IsFound }) => !IsFound);
    }
    if (searchTerm != null && searchTerm !== '') {
      ret = ret.filter(({ Key, Name }) =>
        `${Key}. ${Name}`.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
    }
    setFilteredLogs(ret);
  }, [searchTerm, logs, filterFound, hideSecondBatch]);

  useDeepCompareEffect(() => {
    switch (sortColumn) {
      case SORT_COLUMN_KEY:
        setSortedLogs(
          [...filteredLogs].sort((a, b) => (a.Key > b.Key ? 1 : -1))
        );
        break;
      case SORT_COLUMN_START:
        setSortedLogs(
          [...filteredLogs].sort((a, b) => {
            if (a.CollectableWindowStartTime === b.CollectableWindowStartTime)
              return 0;
            if (a.CollectableWindowStartTime == null) return 1;
            if (b.CollectableWindowStartTime == null) return -1;
            return a.CollectableWindowStartTime < b.CollectableWindowStartTime
              ? -1
              : 1;
          })
        );
        break;
      case SORT_COLUMN_END:
        setSortedLogs(
          [...filteredLogs].sort((a, b) => {
            if (a.CollectableWindowEndTime === b.CollectableWindowEndTime)
              return 0;
            if (a.CollectableWindowEndTime == null) return 1;
            if (b.CollectableWindowEndTime == null) return -1;
            return a.CollectableWindowEndTime < b.CollectableWindowEndTime
              ? -1
              : 1;
          })
        );
        break;
      default:
        break;
    }
  }, [sortColumn, filteredLogs]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'right',
          justifyContent: 'right',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <ThemePicker onChangeTheme={handleChangeTheme} theme={storedTheme} />
      </Box>
      <Menu
        searchTerm={searchTerm}
        onChangeSearchTerm={handleChangeSearchTerm}
        sortColumn={sortColumn}
        onChangeSortColumn={handleChangeSortColumn}
        filterFound={filterFound}
        onChangeFilterFound={handleChangeFilterFound}
        filterSecondBatch={hideSecondBatch}
        onChangeFilterSecondBatch={handleChangeHideSecondBatch}
      />
      <Container component="main">
        <Grid container spacing={2}>
          <Grid xs={12}>
            <img
              className="headerImage"
              src={`${process.env.PUBLIC_URL}/greetings-from-eorzea.png`}
              alt="Greetings from Eorzea header"
            />
          </Grid>
          {sortedLogs.map((log) => (
            <Grid xs={4} key={log.Key}>
              <SightLog
                log={log}
                updateCollectionWindow={updateCollectionWindow}
                onChangeMarkAsFound={handleChangeMarkAsFound}
                currentTime={currentTime}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
